import { Controller, Get, Render, Param } from '@nestjs/common';

@Controller('personnel/keeper')
export class KeeperController {
  @Get('create')
  @Render('animal.create.pug')
  animalsCreate() {
    return {
      title: 'JP - Personnel Management'
    };
  }

  // @Get('edit/:id')
  // @Render('animal.edit.pug')
  // async animalsEdit(@Param('id') id: string) {
  //   return {
  //     title: 'JP - Animal Management',
  //     animal: await this.animalService.getOne(id)
  //   };
  // }
}
