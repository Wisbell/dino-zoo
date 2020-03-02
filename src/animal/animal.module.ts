import { Module } from '@nestjs/common';
import { AnimalService } from './animal.service';
import { AnimalController } from './animal.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnimalRepository } from './animal.repository';

@Module({
  imports: [TypeOrmModule.forFeature([AnimalRepository])],
  providers: [AnimalService],
  controllers: [AnimalController]
})
export class AnimalModule {}
