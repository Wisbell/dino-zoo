import { Module } from '@nestjs/common';
import { PersonnelController } from './personnel.controller';
import { TrainerService } from 'src/trainer/trainer.service';
import { TrainerRepository } from 'src/trainer/trainer.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TrainerRepository])],
  controllers: [PersonnelController],
  providers: [TrainerService],
})
export class PersonnelModule {}
