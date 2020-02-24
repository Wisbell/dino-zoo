import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  @Get()
  @Render('index')
  root() {
    return {
      title: 'Welcome to Jurassic Park!',
      hero_text: 'Jurassic Park Employee and Animal Management System'
    };
  }

  @Get('animals')
  @Render('index')
  animals() {
    return {
      title: 'JP - Animal Management',
      hero_text: 'Animal Management'
    };

  }
  @Get('personnel')
  @Render('index')
  personnel() {
    return {
      title: 'JP - Personnel Management',
      hero_text: 'Employee Management '
    };
  }
}
