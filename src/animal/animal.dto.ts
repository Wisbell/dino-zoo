import { Animal } from "./animal.entity";
import { AnimalCategory } from "./animal-category.enum";
import { IsEnum, IsString, IsEmpty, ValidateIf, IsArray } from "class-validator";
import { Trainer } from "../trainer/trainer.entity";
import { Keeper } from "../keeper/keeper.entity";

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
    trainerId: string,
    keeperIds: string[]
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
    trainerId?: string,
    keeperIds?: string[]
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
    this.keeperIds = keeperIds
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

  @ValidateIf(keeperIds => keeperIds === null)
  @IsArray()
  keeperIds: string[];

  static toAnimal(animalDto: AnimalDto, trainer: Trainer, keepers: Keeper[]): Animal {
    const {
      id,
      name,
      species,
      gender,
      age,
      numberOfKills,
      imageUrl,
      category,
      trainerId,
      keeperIds
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
    animal.keepers = keepers;
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

  static parseKeeperIds(keeperIds: Keeper[] | number[] | string[]): string[] {
    const keeperIdArray = keeperIds as [];

    return keeperIdArray.map( (keeper: Keeper | number | string) => {
      if (keeper instanceof Keeper)
        return keeper.id.toString();
      else if (typeof keeper === 'number')
        return keeper.toString();
      else
        return keeper;
    });
  }
}