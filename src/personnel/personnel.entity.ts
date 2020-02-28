import { PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

export abstract class Personnel extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  gender: string;

  @Column()
  age: number;

  @Column()
  dateOfHire: Date;

  @Column()
  imageUrl: string;
}