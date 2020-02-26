import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

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
