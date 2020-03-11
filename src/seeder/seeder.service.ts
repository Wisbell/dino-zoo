import { Injectable } from '@nestjs/common';
import { KeeperService } from '../keeper/keeper.service';
import * as keeperData from '../data/keepers.json';
import * as trainerData from '../data/trainers.json';
import * as animalData from '../data/animals.json';
import { TrainerService } from '../trainer/trainer.service';
import { AnimalService } from '../animal/animal.service';
import { AnimalDto } from '../animal/animal.dto';
import { getConnection } from 'typeorm';
import { Trainer } from '../trainer/trainer.entity';

@Injectable()
export class SeederService {
  constructor(
    private keeperService: KeeperService,
    private trainerService: TrainerService,
    private animalService: AnimalService
  ) {}

  private seedTrainers(): void {
    trainerData.forEach(async (trainerJSON) => { // TrainerDto?

      const { firstName, lastName, gender, age,
        dateOfHire, trickExpertise, imageUrl } = trainerJSON;

      const trainer = {
        firstName,
        lastName,
        gender,
        age: parseInt(age) || null,
        dateOfHire,
        trickExpertise,
        imageUrl
      }

      await getConnection()
        .createQueryBuilder()
        .insert()
        .into(Trainer)
        .values(trainer)
        .execute();

    });
  }

  private async deleteTrainers(): Promise<void> {
    const allTrainers: Trainer[] = await this.trainerService.getAll();

    allTrainers.forEach(async (trainer: Trainer) => {
      await this.trainerService.delete(trainer.id.toString());
    });
  }

  private seedKeepers(): void {
    keeperData.forEach(async keeper => { // KeeperJSON
      await this.keeperService.create(keeper);
    });
  }

  private async deleteKeepers(): Promise<void> {
    const allKeepers = await this.keeperService.getAll();

    allKeepers.forEach(async keeper => { // Keeper
      await this.keeperService.delete(keeper.id.toString());
    });
  }

  private seedAnimals(): void {
    const getCategory = new AnimalDto().getCategory;

    animalData.forEach(async animalJSON => { // AnimalJSON
      const { name, species, gender, age, numberOfKills,
        imageUrl, category } = animalJSON;

      const animal = new AnimalDto(
        null,
        name,
        species,
        gender,
        age,
        numberOfKills,
        imageUrl,
        getCategory(category),
        null
      )

      await this.animalService.create(animal);
    });
  }

  async deleteAnimals(): Promise<void> {
    const allAnimals = await this.animalService.getAll();

    allAnimals.forEach(async animal => { // Animal
      await this.animalService.delete(animal.id.toString());
    });
  }

  private async seedAll(): Promise<void> {
    await this.seedTrainers();
    await this.seedKeepers();
    await this.seedAnimals();
  }

  private async deleteAll(): Promise<void> {
    await this.deleteAnimals();
    await this.deleteKeepers();
    await this.deleteTrainers();
  }

  async resetDatabase(): Promise<void> {
    await this.deleteAll();
    await this.resetAllTableSequences();
    await this.seedAll();
  }

  async resetAllTableSequences(): Promise<void> {
    const tableNames = await this.getAllTableNames();
    tableNames.forEach( async (name) => await this.resetTableSequence(name) );
  }


  async resetTableSequence(tableName: string): Promise<void> {
    return await getConnection()
      .createEntityManager()
      .query(`ALTER SEQUENCE ${tableName}_id_seq RESTART WITH 1`);
  }

  async getAllTableNames(): Promise<string[]> {
    const tableNamesFromDB = await getConnection()
      .createEntityManager()
      .query(`SELECT table_name
              FROM information_schema.tables
              WHERE table_schema='public'
              AND table_type='BASE TABLE';`);

    const tableNames = tableNamesFromDB.map( (obj) => {
      if(obj.table_name != 'migration')
        return obj.table_name;
    });

    return tableNames.filter( name => name != null );
  }
}
