import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Animal {
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

  // keeper; // Add keeper ID or Keeper model here
}