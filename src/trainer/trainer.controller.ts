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
  displayCreate() {
    return {
      title: 'JP - Personnel Management',
      header_text: 'Create Trainer'
    };
  }

  @Get('edit/:id')
  @Render('trainer.edit.pug')
  async displayEdit(@Param('id') id: string) {
    return {
      title: 'JP - Personnel Management',
      trainer: await this.trainerService.getOne(id)
    };
  }

  @Get(':id')
  async trainersJSON(@Param('id') id: string) {
    return await this.trainerService.getOne(id);
  }

  @Post()
  create(@Body() createTrainerDto: TrainerDto) {
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
