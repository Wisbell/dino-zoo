import { IsString } from "class-validator";

export class PersonnelDto {
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
  imageUrl: string;
}