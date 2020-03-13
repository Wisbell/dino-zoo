import { Module } from '@nestjs/common';
import { AnimalService } from './animal.service';
import { AnimalController } from './animal.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnimalRepository } from './animal.repository';
import { TrainerService } from '../trainer/trainer.service';
import { TrainerRepository } from '../trainer/trainer.repository';
import { KeeperRepository } from '../keeper/keeper.repository';
import { KeeperService } from '../keeper/keeper.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([AnimalRepository]),
    TypeOrmModule.forFeature([TrainerRepository]),
    TypeOrmModule.forFeature([KeeperRepository])
  ],
  providers: [
    AnimalService,
    TrainerService,
    KeeperService
  ],
  controllers: [AnimalController]
})
export class AnimalModule {}
