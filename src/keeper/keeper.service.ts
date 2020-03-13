import { Injectable } from '@nestjs/common';
import { KeeperDto } from './keeper.dto';
import { Keeper } from './keeper.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { KeeperRepository } from './keeper.repository';

@Injectable()
export class KeeperService {
  constructor(
    @InjectRepository(Keeper)
    private readonly keeperRepository: KeeperRepository
  ) {}

  getAll(): Promise<Keeper[]> {
    return this.keeperRepository.find();
  }

  async getAllDtos(): Promise<KeeperDto[]> {
    let trainers = await this.keeperRepository.find();

    const trainerDtos = trainers.map(
      (keeper) => {
        return new KeeperDto(
          keeper.id ? keeper.id.toString() : null,
          keeper.firstName,
          keeper.lastName,
          keeper.gender,
          keeper.age ? keeper.age.toString() : null,
          keeper.dateOfHire,
          keeper.imageUrl,
          keeper.speciality
        )
      });

    return trainerDtos;
  }

  getOne(id: string): Promise<Keeper> {
    return this.keeperRepository.findOne(id);
  }

  create(newKeeper: KeeperDto): Promise<Keeper> {
    return this.keeperRepository.createKeeper(newKeeper);
  }

  async update(id:string, updatedTrainerDto: KeeperDto): Promise<Keeper> {
    let existingTrainer = await this.getOne(id);
    return this.keeperRepository.updateKeeper(existingTrainer, updatedTrainerDto);
  }

  async delete(id: string): Promise<void> {
    await this.keeperRepository.delete(id);
  }
}
