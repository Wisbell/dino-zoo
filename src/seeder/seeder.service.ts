import { Injectable, NotImplementedException } from '@nestjs/common';
import { KeeperService } from '../keeper/keeper.service';
import * as keeperData from '../data/keepers.json';
import * as trainerData from '../data/trainers.json';
import * as animalData from '../data/animals.json';
import { TrainerService } from '../trainer/trainer.service';
import { AnimalService } from '../animal/animal.service';
import { AnimalDto } from '../animal/animal.dto';

@Injectable()
export class SeederService {
  constructor(
    private keeperService: KeeperService,
    private trainerService: TrainerService,
    private animalService: AnimalService
  ) {}

  seedTrainers() {
    trainerData.forEach(async trainer => { // Trainer
      await this.trainerService.create(trainer);
    });
  }

  async deleteTrainers() {
    const allTrainers = await this.trainerService.getAll();

    allTrainers.forEach(async trainer => { // Trainer
      await this.trainerService.delete(trainer.id.toString());
    });
  }

  seedKeepers() {
    keeperData.forEach(async keeper => { // Keeper
      await this.keeperService.create(keeper);
    });
  }

  async deleteKeepers() {
    const allKeepers = await this.keeperService.getAll();

    allKeepers.forEach(async keeper => { // Keeper
      await this.keeperService.delete(keeper.id.toString());
    });
  }

  seedAnimals() {
    animalData.forEach(async animal => { // Animal
      const { name, species, gender, age,
        numberOfKills, imageUrl, category,
      } = animal;

      await this.animalService.create(
        new AnimalDto(
          name, species, gender, age,
          numberOfKills, imageUrl, category
      ));
    });
  }

  async deleteAnimals() {
    const allAnimals = await this.animalService.getAll();

    allAnimals.forEach(async animal => { // Animal
      await this.animalService.delete(animal.id.toString());
    });
  }

}
