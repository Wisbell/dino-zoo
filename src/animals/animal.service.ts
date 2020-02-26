import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Animal } from './animal.entity';
import { AnimalDto } from './create-animal.dto';
import { AnimalRepository } from './animal.repository';

@Injectable()
export class AnimalService {
  constructor(
    @InjectRepository(Animal)
    private readonly animalRepository: AnimalRepository,
  ) {}

  getAll(): Promise<Animal[]> {
    return this.animalRepository.find();
  }

  getOne(id: string): Promise<Animal> {
    return this.animalRepository.findOne(id);
  }

  create(newAnimal: AnimalDto): Promise<Animal> {
    return this.animalRepository.createAnimal(newAnimal);
  }

  async update(id:string, updatedAnimalDto: AnimalDto): Promise<Animal> {
    let existingAnimal = await this.getOne(id);
    return this.animalRepository.updateAnimal(existingAnimal, updatedAnimalDto);
  }

  async delete(id: string): Promise<void> {
    await this.animalRepository.delete(id);
  }
}
