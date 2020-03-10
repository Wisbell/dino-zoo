import { Controller, Get, Render, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { AnimalService } from './animal.service';
import { AnimalDto } from './animal.dto';
import { AnimalCategory } from './animal-category.enum';
import { TrainerService } from '../trainer/trainer.service';

@Controller('animals')
export class AnimalController {
  constructor(
    private animalService: AnimalService,
    private trainerService: TrainerService,
  ) {}

  @Get()
  @Render('animal.home.pug')
  async animalsHome() {
    return {
      title: 'JP - Animal Management',
      hero_text: 'Animal Management',
      animals: await this.animalService.getAll()
    };
  }

  @Get('create')
  @Render('animal.create.pug')
  async animalsCreate() {
    return {
      title: 'JP - Animal Management',
      animal_categories: AnimalCategory,
      trainers: await this.trainerService.getAll()
    };
  }

  @Get('edit/:id')
  @Render('animal.edit.pug')
  async animalsEdit(@Param('id') id: string) {
    return {
      title: 'JP - Animal Management',
      animal: await this.animalService.getOne(id),
      animal_categories: AnimalCategory
    };
  }

  @Get(':id')
  async animalsJSON(@Param('id') id: string) {
    return await this.animalService.getOne(id);
  }

  @Post()
  createAnimal(@Body() createAnimalDto: AnimalDto) {
    return this.animalService.create(createAnimalDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() animalDto: AnimalDto) {
    return this.animalService.update(id, animalDto);
  }

  @Delete(':id')
  deleteAnimal(@Param('id') id: string): Promise<void>  {
    return this.animalService.delete(id);
  }
}
