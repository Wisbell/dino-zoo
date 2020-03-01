import { Controller, Get, Render } from '@nestjs/common';
import { TrainerService } from 'src/trainer/trainer.service';

@Controller('personnel')
export class PersonnelController {
  constructor(
    private trainerService: TrainerService
  ) {}

  @Get()
  @Render('personnel.home.pug')
  async personnelHome() {
    return {
      title: 'JP - Personnel Management',
      hero_text: 'Personnel Management',
      personnel: {
        trainers: await this.trainerService.getAll(),
        keepers: null
      }
    };
  }
}
