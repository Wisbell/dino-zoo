import { Controller, Get, Render } from '@nestjs/common';

@Controller('personnel')
export class PersonnelController {
  @Get()
  @Render('personnel.home.pug')
  async personnelHome() {
    return {
      title: 'JP - Personnel Management',
      hero_text: 'Personnel Management',
    };
  }
}
