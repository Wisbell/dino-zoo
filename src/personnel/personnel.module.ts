import { Module } from '@nestjs/common';
import { PersonnelController } from './personnel.controller';
import { TrainerService } from '../trainer/trainer.service';
import { TrainerRepository } from '../trainer/trainer.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KeeperService } from '../keeper/keeper.service';
import { KeeperRepository } from '../keeper/keeper.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([TrainerRepository]),
    TypeOrmModule.forFeature([KeeperRepository])
  ],
  controllers: [PersonnelController],
  providers: [
    TrainerService,
    KeeperService
  ]
})
export class PersonnelModule {}
