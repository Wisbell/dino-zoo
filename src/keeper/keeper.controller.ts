import { Controller, Get, Render, Param, Delete, Post, Body, Put } from '@nestjs/common';
import { KeeperService } from './keeper.service';
import { KeeperDto } from './keeper.dto';

@Controller('personnel/keepers')
export class KeeperController {
  constructor(
    private keeperService: KeeperService
  ) {}

  @Get('create')
  @Render('keeper.create.pug')
  displayCreate() {
    return {
      title: 'JP - Personnel Management',
      header_text: 'Create Keeper'
    };
  }

  @Get('edit/:id')
  @Render('keeper.edit.pug')
  async displayEdit(@Param('id') id: string) {
    return {
      title: 'JP - Personnel Management',
      keeper: await this.keeperService.getOne(id)
    };
  }

  @Get(':id')
  async keeperJSON(@Param('id') id: string) {
    return await this.keeperService.getOne(id);
  }

  @Post()
  create(@Body() createKeeperDto: KeeperDto) {
    return this.keeperService.create(createKeeperDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatedKeeper: KeeperDto) {
    return this.keeperService.update(id, updatedKeeper);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<void>  {
    return this.keeperService.delete(id);
  }
}
