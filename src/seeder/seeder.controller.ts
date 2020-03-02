import { Controller, Post, Delete } from '@nestjs/common';
import { SeederService } from './seeder.service';

@Controller('seeder')
export class SeederController {
  constructor(
    private seederService: SeederService
  ) {}

  @Post('keepers')
  seedKeepers() {
    try {
      this.seederService.seedKeepers();
      return { success: "Seeding of keepers table successful" }
    }
    catch (error) {
      return { error: "Seeding of keepers table failed" }
    }
  }

  @Delete('keepers')
  deleteKeepers() {
    try {
      this.seederService.deleteKeepers();
      return { success: "Deleting of keepers successful" }
    }
    catch (error) {
      return { error: "Deleting of keepers failed" }
    }
  }

  @Post('trainers')
  seedTrainers() {
    try {
      this.seederService.seedTrainers();
      return { success: "Seeding of keepers table successful" }
    }
    catch (error) {
      return { error: "Seeding of keepers table failed" }
    }
  }

  @Delete('trainers')
  deleteTrainers() {
    try {
      this.seederService.deleteTrainers();
      return { success: "Deleting of keepers successful" }
    }
    catch (error) {
      return { error: "Deleting of keepers failed" }
    }
  }

  @Post('animals')
  seedAnimals() {
    try {
      this.seederService.seedAnimals();
      return { success: "Seeding of keepers table successful" }
    }
    catch (error) {
      return { error: "Seeding of keepers table failed" }
    }
  }

  @Delete('animals')
  deleteAnimals() {
    try {
      this.seederService.deleteAnimals();
      return { success: "Deleting of keepers successful" }
    }
    catch (error) {
      return { error: "Deleting of keepers failed" }
    }
  }
}
