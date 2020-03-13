import { IsString } from "class-validator";
import { Keeper } from "./keeper.entity";
import { PersonnelDto } from "../personnel/personnel.dto";

export class KeeperDto extends PersonnelDto {
  constructor()
  constructor(
    id: string,
    firstName: string,
    lastName: string,
    gender: string,
    age: string,
    dateOfHire: string,
    imageUrl: string,
    speciality: string,
  )
  constructor(
    id?: string,
    firstName?: string,
    lastName?: string,
    gender?: string,
    age?: string,
    dateOfHire?: string,
    imageUrl?: string,
    speciality?: string
  ) {
    super();
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.age = age;
    this.dateOfHire = dateOfHire;
    this.imageUrl = imageUrl;
    this.speciality = speciality;
  }

  @IsString()
  speciality: string;

  static toKeeper(keeperDto: KeeperDto) {
    const {
      id,
      firstName,
      lastName,
      gender,
      age,
      dateOfHire,
      speciality,
      imageUrl
    } = keeperDto;

    const keeper = new Keeper();
    keeper.id = parseInt(id) || null;
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