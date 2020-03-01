import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TrainerDto } from './trainer.dto';
import { Trainer } from './trainer.entity';
import { TrainerRepository } from './trainer.repository';

@Injectable()
export class TrainerService {
  constructor(
    @InjectRepository(Trainer)
    private readonly trainerRepository: TrainerRepository
  ) {}

  getAll(): Promise<Trainer[]> {
    return this.trainerRepository.find();
  }

  getOne(id: string): Promise<Trainer> {
    return this.trainerRepository.findOne(id);
  }

  create(newAnimal: TrainerDto): Promise<Trainer> {
    return this.trainerRepository.createTrainer(newAnimal);
  }

  async update(id:string, updatedTrainerDto: TrainerDto): Promise<Trainer> {
    let existingTrainer = await this.getOne(id);
    return this.trainerRepository.updateTrainer(existingTrainer, updatedTrainerDto);
  }

  async delete(id: string): Promise<void> {
    await this.trainerRepository.delete(id);
  }
}
