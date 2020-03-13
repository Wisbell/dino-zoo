import { IsString } from "class-validator";
import { Trainer } from "./trainer.entity";

export class TrainerDto {
  constructor()
  constructor(
    id: string,
    firstName: string,
    lastName: string,
    gender: string,
    age: string,
    dateOfHire: string,
    trickExpertise: string,
    imageUrl: string
  )
  constructor(
    id?: string,
    firstName?: string,
    lastName?: string,
    gender?: string,
    age?: string,
    dateOfHire?: string,
    trickExpertise?: string,
    imageUrl?: string
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.age = age;
    this.dateOfHire = dateOfHire;
    this.trickExpertise = trickExpertise;
    this.imageUrl = imageUrl;
  }

  @IsString()
  id: string;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  gender: string;

  @IsString()
  age: string;

  @IsString()
  dateOfHire: string;

  @IsString()
  trickExpertise: string;

  @IsString()
  imageUrl: string;

  static toTrainer(trainerDto: TrainerDto) {
    const {
      id,
      firstName,
      lastName,
      gender,
      age,
      dateOfHire,
      trickExpertise,
      imageUrl
    } = trainerDto;

    const trainer = new Trainer();
    trainer.id = parseInt(id) || null;
    trainer.firstName = firstName;
    trainer.lastName = lastName;
    trainer.gender = gender;
    trainer.age = parseInt(age) || null;
    trainer.dateOfHire = dateOfHire;
    trainer.trickExpertise = trickExpertise;
    trainer.imageUrl = imageUrl;
    return trainer;
  }
}