import { Injectable, NotImplementedException } from '@nestjs/common';
import { KeeperService } from '../keeper/keeper.service';
import * as keeperData from '../data/keepers.json';
import * as trainerData from '../data/trainers.json';
import * as animalData from '../data/animals.json';
import { TrainerService } from '../trainer/trainer.service';
import { AnimalService } from '../animal/animal.service';
import { AnimalDto } from '../animal/animal.dto';
import { getConnection } from 'typeorm';
import { Animal } from '../animal/animal.entity';
import { Trainer } from '../trainer/trainer.entity';

@Injectable()
export class SeederService {
  constructor(
    private keeperService: KeeperService,
    private trainerService: TrainerService,
    private animalService: AnimalService
  ) {}

  private seedTrainers(): void {
    trainerData.forEach(async trainer => { // TrainerDto?
      await this.trainerService.create(trainer);
    });
  }

  private async deleteTrainers(): Promise<void> {
    const allTrainers: Trainer[] = await this.trainerService.getAll();

    allTrainers.forEach(async (trainer: Trainer) => {
      await this.trainerService.delete(trainer.id.toString());
    });
  }

  // private async dropTrainerTable(): Promise<void> {
  //   const queryRunner = await getConnection().createQueryRunner();
  //   const hasTable = await queryRunner.hasTable('trainer');

  //   if(hasTable) {
  //     await queryRunner.dropTable('trainer');
  //   }
  // }

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

  // private async dropKeeperTable(): Promise<void> {
  //   const queryRunner = await getConnection().createQueryRunner();
  //   const hasTable = await queryRunner.hasTable('keeper');

  //   if(hasTable) {
  //     await queryRunner.dropTable('keeper');
  //   }
  // }

  private seedAnimals(): void {
    const getCategory = new AnimalDto().getCategory;

    animalData.forEach(async animalJSON => { // AnimalJSON
      const { name, species, gender, age, numberOfKills,
        imageUrl, category } = animalJSON;

      const animal = {
        name,
        species,
        gender,
        age: parseInt(age) || null,
        numberOfKills: parseInt(numberOfKills) || null,
        imageUrl,
        category: getCategory(category),
        trainer: null
      }

      await getConnection()
        .createQueryBuilder()
        .insert()
        .into(Animal)
        .values(animal)
        .execute();

      // Add animal to database
      // const animalId = await getConnection()
      //   .createQueryBuilder()
      //   .insert()
      //   .into(Animal)
      //   .values(animal)
      //   .execute()
      //   .then(data => {
      //     return data.identifiers[0].id;
      //   });

      // Add relationship to trainer
      // await getConnection()
      //   .createQueryBuilder()
      //   .relation(Animal, "trainer")
      //   .of(animalId)
      //   .set(trainerId);
    });
  }

  async deleteAnimals(): Promise<void> {
    const allAnimals = await this.animalService.getAll();

    allAnimals.forEach(async animal => { // Animal
      await this.animalService.delete(animal.id.toString());
    });
  }

  // private async dropAnimalTable(): Promise<void> {
  //   const queryRunner = await getConnection().createQueryRunner();
  //   const hasTable = await queryRunner.hasTable('animal');

  //   if(hasTable) {
  //     await queryRunner.dropTable('animal');
  //   }
  // }

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

  // private async dropAllTables(): Promise<void> {
  //   await this.dropAnimalTable();
  //   await this.dropTrainerTable();
  //   await this.dropKeeperTable();
  // }

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
