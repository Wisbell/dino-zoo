import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Animal } from './animal.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AnimalsService {
  constructor(
    @InjectRepository(Animal)
    private readonly animalRepository: Repository<Animal>,
  ) {}

  async getAll(): Promise<Animal[]> {
    return await this.animalRepository.find();
  }

  // findOne(id: string): Promise<Animal> {
  //   return this.animalRepository.findOne(id);
  // }

  create(newAnimal: Animal): Promise<Animal> {
    console.log('Service animal', newAnimal);
    return this.animalRepository.save(newAnimal);
  }

  // async remove(id: string): Promise<void> {
  //   await this.animalRepository.delete(id);
  // }
}
