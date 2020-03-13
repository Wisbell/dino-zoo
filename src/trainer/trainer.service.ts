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

  async getAllDtos(): Promise<TrainerDto[]> {
    let trainers = await this.trainerRepository.find();

    const trainerDtos = trainers.map(
      (trainer) => {
        return new TrainerDto(
          trainer.id ? trainer.id.toString() : null,
          trainer.firstName,
          trainer.lastName,
          trainer.gender,
          trainer.age ? trainer.age.toString() : null,
          trainer.dateOfHire,
          trainer.trickExpertise,
          trainer.imageUrl
        )
      });

    return trainerDtos;
  }

  getOne(id: string): Promise<Trainer> {
    return this.trainerRepository.findOne(id);
  }

  create(newTrainer: TrainerDto): Promise<Trainer> {
    return this.trainerRepository.createTrainer(newTrainer);
  }

  async update(id:string, updatedTrainerDto: TrainerDto): Promise<Trainer> {
    let existingTrainer = await this.getOne(id);
    return this.trainerRepository.updateTrainer(existingTrainer, updatedTrainerDto);
  }

  async delete(id: string): Promise<void> {
    await this.trainerRepository.delete(id);
  }
}
