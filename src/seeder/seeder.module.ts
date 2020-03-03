import { Module } from '@nestjs/common';
import { SeederService } from './seeder.service';
import { SeederController } from './seeder.controller';
import { KeeperService } from '../keeper/keeper.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KeeperRepository } from '../keeper/keeper.repository';
import { TrainerRepository } from '../trainer/trainer.repository';
import { TrainerService } from '../trainer/trainer.service';
import { AnimalService } from '../animal/animal.service';
import { AnimalRepository } from '../animal/animal.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([KeeperRepository]),
    TypeOrmModule.forFeature([TrainerRepository]),
    TypeOrmModule.forFeature([AnimalRepository])
  ],
  controllers: [SeederController],
  providers: [
    SeederService,
    KeeperService,
    TrainerService,
    AnimalService
  ]
})
export class SeederModule {}
