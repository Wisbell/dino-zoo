import { Controller, Get, Render } from '@nestjs/common';

@Controller('animals')
export class AnimalsController {

  @Get()
  @Render('animal.home.pug')
  animalsHome() {
    return {
      title: 'JP - Animal Management',
      hero_text: 'Animal Management'
    };
  }

  @Get('create')
  @Render('animal.create.pug')
  animalsCreate() {
    return {
      title: 'JP - Animal Management',
      hero_text: 'Animal Management'
    };

  }

  @Get('edit')
  @Render('animal.edit.pug')
  animalsEdit() {
    return {
      title: 'JP - Animal Management',
      hero_text: 'Animal Management'
    };

  }
}
