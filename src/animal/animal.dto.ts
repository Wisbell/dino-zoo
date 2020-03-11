import { Animal } from "./animal.entity";
import { AnimalCategory } from "./animal-category.enum";
import { IsEnum, IsString, IsEmpty, ValidateIf } from "class-validator";
import { Trainer } from "../trainer/trainer.entity";

export class AnimalDto {
  constructor()
  constructor(
    id: string,
    name: string,
    species: string,
    gender: string,
    age: string,
    numberOfKills: string,
    imageUrl: string,
    category: string,
    trainerId: string
  )
  constructor(
    id?: string,
    name?: string,
    species?: string,
    gender?: string,
    age?: string,
    numberOfKills?: string,
    imageUrl?: string,
    category?: string,
    trainerId?: string
  ) {
    this.id = id;
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
  id: string;

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

  @ValidateIf(trainerId => trainerId === null)
  @IsString()
  trainerId: string;

  // keeper; // Add keeper ID or Keeper model here

  static toAnimal(animalDto: AnimalDto, trainer: Trainer): Animal {
    const {
      id,
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
    animal.id = parseInt(id) || null;
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

  static parseTrainerId(trainer: Trainer | number | string): string {
    if (trainer instanceof Trainer)
      return trainer.id.toString();
    else if (typeof trainer === 'number')
      return trainer.toString();
    else
      return trainer;
  }
}