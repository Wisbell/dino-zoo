import { Controller, Get, Render } from '@nestjs/common';
import { TrainerService } from '../trainer/trainer.service';
import { KeeperService } from '../keeper/keeper.service';

@Controller('personnel')
export class PersonnelController {
  constructor(
    private trainerService: TrainerService,
    private keeperService: KeeperService
  ) {}

  @Get()
  @Render('personnel.home.pug')
  async personnelHome() {
    return {
      title: 'JP - Personnel Management',
      hero_text: 'Personnel Management',
      personnel: {
        trainers: await this.trainerService.getAll(),
        keepers: await this.keeperService.getAll()
      }
    };
  }
}
