import { Animal } from "./animal.entity";

export class AnimalDto {

  name: string;
  species: string;
  gender: string;
  age: string;
  numberOfKills: string;

  // keeper; // Add keeper ID or Keeper model here

  static toAnimal(animalDto: AnimalDto) {
    const {
      name,
      species,
      gender,
      age,
      numberOfKills
    } = animalDto;

    const animal = new Animal();
    animal.name = name;
    animal.species = species;
    animal.gender = gender;
    animal.age = parseInt(age) || 0;
    animal.numberOfKills = parseInt(numberOfKills) || 0;
    return animal;
  }
}