import { Module } from '@nestjs/common';
import { PersonnelController } from './personnel.controller';
import { TrainerService } from 'src/trainer/trainer.service';
import { TrainerRepository } from 'src/trainer/trainer.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KeeperService } from 'src/keeper/keeper.service';
import { KeeperRepository } from 'src/keeper/keeper.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([TrainerRepository]),
    TypeOrmModule.forFeature([KeeperRepository])
  ],
  controllers: [PersonnelController],
  providers: [
    TrainerService,
    KeeperService
  ],
})
export class PersonnelModule {}
