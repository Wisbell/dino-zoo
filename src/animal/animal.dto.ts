import { Animal } from "./animal.entity";
import { AnimalCategory } from "./animal-category.enum";
import { IsEnum, IsString } from "class-validator";

export class AnimalDto {
  constructor(
    name: string,
    species: string,
    gender: string,
    age: string,
    numberOfKills: string,
    imageUrl: string,
    category: string
  ) {
    this.name = name;
    this.species = species;
    this.gender = gender;
    this.age = age;
    this.numberOfKills = numberOfKills;
    this.imageUrl = imageUrl;
    this.setCategory(category);
  }

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

  setCategory(category: string): void {
    if (category === AnimalCategory.LARGE)
      this.category = AnimalCategory.LARGE;

    else if (category === AnimalCategory.MEDIUM)
      this.category = AnimalCategory.MEDIUM;

    else if (category === AnimalCategory.SMALL)
      this.category = AnimalCategory.SMALL;
  }
}