import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Animal } from './animal.entity';
import { AnimalDto } from './animal.dto';
import { AnimalRepository } from './animal.repository';
import { TrainerService } from '../trainer/trainer.service';
import { Trainer } from '../trainer/trainer.entity';

@Injectable()
export class AnimalService {
  constructor(
    @InjectRepository(Animal)
    private readonly animalRepository: AnimalRepository,
    private readonly trainerService: TrainerService,
  ) {}

  getAll(): Promise<Animal[]> {
    return this.animalRepository.find();
  }

  getOne(id: string): Promise<Animal> {
    return this.animalRepository.findOne(id);
  }

  async create(newAnimal: AnimalDto): Promise<Animal> {
    let trainer: Trainer = null;

    if (newAnimal.trainerId)
      trainer = await this.trainerService.getOne(newAnimal.trainerId);

    return this.animalRepository.createAnimal(newAnimal, trainer);
  }

  async update(id:string, updatedAnimalDto: AnimalDto): Promise<Animal> {
    let existingAnimal = await this.getOne(id);
    return this.animalRepository.updateAnimal(existingAnimal, updatedAnimalDto);
  }

  async delete(id: string): Promise<void> {
    await this.animalRepository.delete(id);
  }
}
