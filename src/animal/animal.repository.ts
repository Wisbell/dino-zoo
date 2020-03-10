import { Repository, EntityRepository } from 'typeorm';
import { Animal } from './animal.entity';
import { AnimalDto } from './animal.dto';
import { Trainer } from '../trainer/trainer.entity';

@EntityRepository(Animal)
export class AnimalRepository extends Repository<Animal> {
  async createAnimal(createAnimalDto: AnimalDto, trainer: Trainer) {
    const animal = AnimalDto.toAnimal(createAnimalDto, trainer);
    return animal.save();
  }

  async updateAnimal(existingAnimal: Animal, updatedAnimalDto: AnimalDto) {
    const updatedAnimal = AnimalDto.toAnimal(updatedAnimalDto, null); // TODO: FIX THIS
    existingAnimal.name = updatedAnimal.name;
    existingAnimal.species = updatedAnimal.species;
    existingAnimal.gender = updatedAnimal.gender;
    existingAnimal.age = updatedAnimal.age;
    existingAnimal.numberOfKills = updatedAnimal.numberOfKills;
    existingAnimal.imageUrl = updatedAnimal.imageUrl;
    existingAnimal.category = updatedAnimal.category;
    return this.save(existingAnimal);
  }
}