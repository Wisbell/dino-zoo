import { Module } from '@nestjs/common';
import { SeederService } from './seeder.service';
import { SeederController } from './seeder.controller';
import { KeeperService } from 'src/keeper/keeper.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KeeperRepository } from 'src/keeper/keeper.repository';
import { TrainerRepository } from 'src/trainer/trainer.repository';
import { TrainerService } from 'src/trainer/trainer.service';
import { AnimalService } from 'src/animal/animal.service';
import { AnimalRepository } from 'src/animal/animal.repository';

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
