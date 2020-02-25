import { Animal } from "./animal.entity";

export class CreateAnimalDto {

  name: string;
  species: string;
  gender: string;
  age: string;
  numberOfKills: string;

  // keeper; // Add keeper ID or Keeper model here

  static toAnimal(createAnimalDto: CreateAnimalDto) {
    const {
      name,
      species,
      gender,
      age,
      numberOfKills
    } = createAnimalDto;

    const animal = new Animal();
    animal.name = name;
    animal.species = species;
    animal.gender = gender;
    animal.age = parseInt(age);
    animal.numberOfKills = parseInt(numberOfKills);
    return animal;
  }
}