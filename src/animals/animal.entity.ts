import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity()
export class Animal extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  species: string;

  @Column()
  gender: string;

  @Column()
  age: number;

  @Column()
  numberOfKills: number;

  @Column()
  imageUrl: string;

  // keeper; // Add keeper ID or Keeper model here
}