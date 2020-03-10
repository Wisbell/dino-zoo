import { Module } from '@nestjs/common';
import { AnimalService } from './animal.service';
import { AnimalController } from './animal.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnimalRepository } from './animal.repository';
import { TrainerService } from '../trainer/trainer.service';
import { TrainerRepository } from '../trainer/trainer.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([AnimalRepository]),
    TypeOrmModule.forFeature([TrainerRepository])
  ],
  providers: [
    AnimalService,
    TrainerService
  ],
  controllers: [AnimalController]
})
export class AnimalModule {}
