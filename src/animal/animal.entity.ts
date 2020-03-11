import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToOne } from 'typeorm';
import { AnimalCategory } from './animal-category.enum';
import { Trainer } from '../trainer/trainer.entity';

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

  @ManyToOne(type => Trainer, trainer => trainer.animals, { onDelete: 'CASCADE' })
  trainer: Trainer;

  // keeper; // Add keeper ID or Keeper model here
}