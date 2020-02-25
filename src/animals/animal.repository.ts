import { Repository, EntityRepository } from 'typeorm';
import { Animal } from './animal.entity';
import { CreateAnimalDto } from './create-animal.dto';

@EntityRepository(Animal)
export class AnimalRepository extends Repository<Animal> {
  async createAnimal(createAnimalDto: CreateAnimalDto) {
    const animal = CreateAnimalDto.toAnimal(createAnimalDto);
    return animal.save();
  }
}