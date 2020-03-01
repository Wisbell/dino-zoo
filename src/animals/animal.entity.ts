import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';
import { AnimalCategory } from './animal-category.enum';

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

  @Column({ nullable: true })
  age?: number;

  @Column({ nullable: true })
  numberOfKills?: number;

  @Column()
  imageUrl?: string;

  @Column()
  category: AnimalCategory;

  // keeper; // Add keeper ID or Keeper model here
}