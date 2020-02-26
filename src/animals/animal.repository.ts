import { Repository, EntityRepository } from 'typeorm';
import { Animal } from './animal.entity';
import { AnimalDto } from './animal.dto';

@EntityRepository(Animal)
export class AnimalRepository extends Repository<Animal> {
  async createAnimal(createAnimalDto: AnimalDto) {
    const animal = AnimalDto.toAnimal(createAnimalDto);
    return animal.save();
  }

  async updateAnimal(existingAnimal: Animal, updatedAnimalDto: AnimalDto) {
    const updatedAnimal = AnimalDto.toAnimal(updatedAnimalDto);
    existingAnimal.name = updatedAnimal.name;
    existingAnimal.species = updatedAnimal.species;
    existingAnimal.gender = updatedAnimal.gender;
    existingAnimal.age = updatedAnimal.age;
    existingAnimal.numberOfKills = updatedAnimal.numberOfKills;
    return this.save(existingAnimal);
  }
}