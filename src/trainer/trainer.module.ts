import { Module } from '@nestjs/common';
import { TrainerController } from './trainer.controller';
import { TrainerService } from './trainer.service';
import { TrainerRepository } from './trainer.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TrainerRepository])],
  controllers: [TrainerController],
  providers: [TrainerService]
})
export class TrainerModule {}
