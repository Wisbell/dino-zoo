import { IsEnum, IsString } from "class-validator";
import { Keeper } from "./keeper.entity";
import { PersonnelDto } from "../personnel/personnel.dto";

export class KeeperDto extends PersonnelDto {
  @IsString()
  speciality: string;

  // keeper; // Add keeper ID or Keeper model here

  static toKeeper(keeperDto: KeeperDto) {
    const {
      firstName,
      lastName,
      gender,
      age,
      dateOfHire,
      speciality,
      imageUrl
    } = keeperDto;

    const keeper = new Keeper();
    keeper.firstName = firstName;
    keeper.lastName = lastName;
    keeper.gender = gender;
    keeper.age = parseInt(age) || null;
    keeper.dateOfHire = dateOfHire;
    keeper.speciality = speciality;
    keeper.imageUrl = imageUrl;
    return keeper;
  }
}