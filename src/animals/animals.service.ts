import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Animal } from './animal.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AnimalsService {
  constructor(
    @InjectRepository(Animal)
    private readonly usersRepository: Repository<Animal>,
  ) {}

  findAll(): Promise<Animal[]> {
    return this.usersRepository.find();
  }

  findOne(id: string): Promise<Animal> {
    return this.usersRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
