import { Controller, Get, Param, Post, Put, Delete, Body } from '@nestjs/common';
import { CreateAnimalDto } from './create-animal.dto';
import { AnimalsService } from './animals.service';
import { Animal } from './animal.entity';

@Controller('api/animals')
export class AnimalsApiController {
  constructor(
    private animalService: AnimalsService
  ){}

  @Get()
  async getAll(): Promise<Animal[]>{
    return await this.animalService.getAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} cat`;
  }

  @Post()
  createAnimal(@Body() createAnimalDto: CreateAnimalDto) {
    console.log('Controller createAnimalDto', createAnimalDto);
    return this.animalService.create(
      CreateAnimalDto.toAnimal(createAnimalDto)
    );
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
