import { Injectable, NotImplementedException } from '@nestjs/common';
import { KeeperService } from '../keeper/keeper.service';
import * as keeperData from '../data/keepers.json';
import * as trainerData from '../data/trainers.json';
import { TrainerService } from 'src/trainer/trainer.service';

@Injectable()
export class SeederService {
  constructor(
    private keeperService: KeeperService,
    private trainerService: TrainerService,
    private animalService: TrainerService
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
    throw new NotImplementedException();
  }

  deleteAnimals() {
    throw new NotImplementedException();
  }

}
