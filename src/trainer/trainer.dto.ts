import { IsEnum, IsString } from "class-validator";
import { Trainer } from "./trainer.entity";

export class TrainerDto {
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

  // keeper; // Add keeper ID or Keeper model here

  static toTrainer(trainerDto: TrainerDto) {
    const {
      firstName,
      lastName,
      gender,
      age,
      dateOfHire,
      trickExpertise,
      imageUrl
    } = trainerDto;

    const trainer = new Trainer();
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