import { Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';

@Controller('api/animals')
export class AnimalsApiController {
  @Get()
  // findAll(@Query() query: ListAllEntities) {
  findAll() {
    return `This action returns all cats (limit: items)`;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} cat`;
  }

  @Post()
  // create(@Body() createCatDto: CreateCatDto) {
  create() {
    return 'This action adds a new cat';
  }

  @Put(':id')
  // update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
  update(@Param('id') id: string) {
    return `This action updates a #${id} cat`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }
}
