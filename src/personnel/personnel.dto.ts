import { IsString } from "class-validator";

export abstract class PersonnelDto {
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
  imageUrl: string;
}