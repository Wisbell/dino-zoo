import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AppController {

  @Get()
  @Render('home')
  root() {
    return {
      title: 'Welcome to Jurassic Park!',
      hero_text: 'Jurassic Park Employee and Animal Management System'
    };
  }

  @Get('personnel')
  @Render('personnel')
  personnel() {
    return {
      title: 'JP - Personnel Management',
      hero_text: 'Employee Management '
    };
  }
}
