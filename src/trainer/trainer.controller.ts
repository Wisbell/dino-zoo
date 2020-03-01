import { Controller, Get, Render, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { TrainerService } from './trainer.service';
import { TrainerDto } from './trainer.dto';

@Controller('personnel/trainers')
export class TrainerController {
  constructor(
    private trainerService: TrainerService
  ) {}

  @Get('create')
  @Render('trainer.create.pug')
  personnelCreate() {
    return {
      title: 'JP - Personnel Management',
      header_text: 'Create Trainer'
    };
  }

  // @Get()
  // @Render('animal.home.pug')
  // async animalsHome() {
  //   return {
  //     title: 'JP - Animal Management',
  //     hero_text: 'Animal Management',
  //     animals: await this.animalService.getAll()
  //   };
  // }

  // @Get('create')
  // @Render('animal.create.pug')
  // animalsCreate() {
  //   return {
  //     title: 'JP - Animal Management',
  //     animal_categories: AnimalCategory
  //   };
  // }

  // @Get('edit/:id')
  // @Render('animal.edit.pug')
  // async animalsEdit(@Param('id') id: string) {
  //   return {
  //     title: 'JP - Animal Management',
  //     animal: await this.animalService.getOne(id),
  //     animal_categories: AnimalCategory
  //   };
  // }

  // @Get(':id')
  // async animalsJSON(@Param('id') id: string) {
  //   return await this.animalService.getOne(id);
  // }

  @Post()
  createTrainer(@Body() createTrainerDto: TrainerDto) {
    return this.trainerService.create(createTrainerDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() TrainerDto: TrainerDto) {
    return this.trainerService.update(id, TrainerDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<void>  {
    return this.trainerService.delete(id);
  }
}
