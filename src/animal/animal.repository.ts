import { Repository, EntityRepository } from 'typeorm';
import { Animal } from './animal.entity';
import { AnimalDto } from './animal.dto';
import { Trainer } from '../trainer/trainer.entity';
import { Keeper } from '../keeper/keeper.entity';

@EntityRepository(Animal)
export class AnimalRepository extends Repository<Animal> {
  async createAnimal(createAnimalDto: AnimalDto, trainer: Trainer, keepers: Keeper[]) {
    const animal = AnimalDto.toAnimal(createAnimalDto, trainer, keepers);
    return animal.save();
  }

  async updateAnimal(existingAnimal: Animal, updatedAnimalDto: AnimalDto, trainer: Trainer, keepers: Keeper[]) {
    const updatedAnimal = AnimalDto.toAnimal(updatedAnimalDto, trainer, keepers);

    existingAnimal.name = updatedAnimal.name;
    existingAnimal.species = updatedAnimal.species;
    existingAnimal.gender = updatedAnimal.gender;
    existingAnimal.age = updatedAnimal.age;
    existingAnimal.numberOfKills = updatedAnimal.numberOfKills;
    existingAnimal.imageUrl = updatedAnimal.imageUrl;
    existingAnimal.category = updatedAnimal.category;
    existingAnimal.trainer = trainer;
    existingAnimal.keepers = keepers;

    return this.save(existingAnimal);
  }
}