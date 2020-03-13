import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Animal } from './animal.entity';
import { AnimalDto } from './animal.dto';
import { AnimalRepository } from './animal.repository';
import { TrainerService } from '../trainer/trainer.service';
import { Trainer } from '../trainer/trainer.entity';
import { Keeper } from '../keeper/keeper.entity';
import { KeeperService } from '../keeper/keeper.service';

@Injectable()
export class AnimalService {
  constructor(
    @InjectRepository(Animal)
    private readonly animalRepository: AnimalRepository,
    private readonly trainerService: TrainerService,
    private readonly keeperService: KeeperService
  ) {}

  async getAll(): Promise<Animal[]> {
    return this.animalRepository.find({ loadRelationIds: true });
  }

  async getAllDtos(): Promise<AnimalDto[]> {
    let animals = await this.animalRepository.find({ loadRelationIds: true });

    const animalDtos = animals.map(
      (animal) => {
        return new AnimalDto(
          animal.id ? animal.id.toString() : null,
          animal.name,
          animal.species,
          animal.gender,
          animal.age ? animal.age.toString() : null,
          animal.numberOfKills ? animal.numberOfKills.toString() : null,
          animal.imageUrl,
          animal.category,
          AnimalDto.parseTrainerId(animal.trainer),
          AnimalDto.parseKeeperIds(animal.keepers)
        )
      });

    return animalDtos;
  }

  getOne(id: string): Promise<Animal> {
    return this.animalRepository.findOne(id);
  }

  async getOneDto(id: string): Promise<AnimalDto> {
    const animal = await this.animalRepository.findOne(id, { loadRelationIds: true });

    return new AnimalDto(
          animal.id.toString(),
          animal.name,
          animal.species,
          animal.gender,
          animal.age ? animal.age.toString() : null,
          animal.numberOfKills ? animal.numberOfKills.toString() : null,
          animal.imageUrl,
          animal.category,
          AnimalDto.parseTrainerId(animal.trainer),
          AnimalDto.parseKeeperIds(animal.keepers)
        );
  }

  async create(newAnimal: AnimalDto): Promise<Animal> {
    let trainer: Trainer = null;
    let keepers: Keeper[] = null;

    if (newAnimal.trainerId)
      trainer = await this.trainerService.getOne(newAnimal.trainerId);

    if (newAnimal.keeperIds) {
      keepers = [];
      newAnimal.keeperIds.forEach( async (id) => {
        keepers.push( await this.keeperService.getOne(id) );
      });
    }

    return this.animalRepository.createAnimal(newAnimal, trainer, keepers);
  }

  async update(id:string, updatedAnimalDto: AnimalDto): Promise<Animal> {
    let trainer: Trainer = null;
    let keepers: Keeper[] = null;

    if (updatedAnimalDto.trainerId)
      trainer = await this.trainerService.getOne(updatedAnimalDto.trainerId);

    if (updatedAnimalDto.keeperIds) {
      keepers = [];
      updatedAnimalDto.keeperIds.forEach( async (id) => {
        keepers.push( await this.keeperService.getOne(id) );
      });
    }

    let existingAnimal = await this.getOne(id);
    return this.animalRepository.updateAnimal(existingAnimal, updatedAnimalDto, trainer, keepers);
  }

  async delete(id: string): Promise<void> {
    await this.animalRepository.delete(id);
  }
}
