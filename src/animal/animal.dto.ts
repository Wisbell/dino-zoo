import { Animal } from "./animal.entity";
import { AnimalCategory } from "./animal-category.enum";
import { IsEnum, IsString } from "class-validator";
import { Trainer } from "../trainer/trainer.entity";

export class AnimalDto {
  constructor()
  constructor(
    name?: string,
    species?: string,
    gender?: string,
    age?: string,
    numberOfKills?: string,
    imageUrl?: string,
    category?: string,
    trainerId?: string // TODO: try trainerId: string;
  ) {
    this.name = name;
    this.species = species;
    this.gender = gender;
    this.age = age;
    this.numberOfKills = numberOfKills;
    this.imageUrl = imageUrl;
    this.setCategory(category);
    this.trainerId = trainerId;
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

  // @IsString()
  trainerId: string;

  // trainer: Trainer;

  // keeper; // Add keeper ID or Keeper model here

  static toAnimal(animalDto: AnimalDto, trainer: Trainer): Animal {
    const {
      name,
      species,
      gender,
      age,
      numberOfKills,
      imageUrl,
      category,
      trainerId
    } = animalDto;

    const animal = new Animal();
    animal.name = name;
    animal.species = species;
    animal.gender = gender;
    animal.age = parseInt(age) || null;
    animal.numberOfKills = parseInt(numberOfKills) || null;
    animal.imageUrl = imageUrl;
    animal.category = category;
    animal.trainer = trainer;
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

  getCategory(category: string): AnimalCategory {
    if (category === AnimalCategory.LARGE)
      return AnimalCategory.LARGE;

    else if (category === AnimalCategory.MEDIUM)
      return AnimalCategory.MEDIUM;

    else if (category === AnimalCategory.SMALL)
      return AnimalCategory.SMALL;
  }
}