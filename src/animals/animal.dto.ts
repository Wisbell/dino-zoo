import { Animal } from "./animal.entity";
import { AnimalCategory } from "./animal-category.enum";
import { IsEnum, IsString } from "class-validator";

export class AnimalDto {
  @IsString()
  name: string;

  @IsString()
  species: string;

  @IsString()
  gender: string;

  @IsString()
  age: string;

  @IsString()
  numberOfKills: string;

  @IsString()
  imageUrl: string;

  @IsEnum(AnimalCategory)
  category: AnimalCategory;

  // keeper; // Add keeper ID or Keeper model here

  static toAnimal(animalDto: AnimalDto) {
    const {
      name,
      species,
      gender,
      age,
      numberOfKills,
      imageUrl,
      category
    } = animalDto;

    const animal = new Animal();
    animal.name = name;
    animal.species = species;
    animal.gender = gender;
    animal.age = parseInt(age) || null;
    animal.numberOfKills = parseInt(numberOfKills) || null;
    animal.imageUrl = imageUrl;
    animal.category = category;
    return animal;
  }
}