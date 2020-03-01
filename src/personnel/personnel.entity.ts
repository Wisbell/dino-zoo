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

  @Column({ nullable: true })
  age: number;

  @Column()
  dateOfHire: string; // TODO: Implement use of date times -> : Date

  @Column()
  imageUrl: string;
}