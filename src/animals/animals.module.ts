import { Module } from '@nestjs/common';
import { AnimalsService } from './animals.service';
import { AnimalsController } from './animals.controller';
import { AnimalsApiController } from './animals-api.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Animal } from './animal.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Animal])],
  providers: [AnimalsService],
  controllers: [AnimalsController, AnimalsApiController]
})
export class AnimalsModule {}
