import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import { AnimalCategory } from './animal-category.enum';
import { Trainer } from '../trainer/trainer.entity';
import { Keeper } from '../keeper/keeper.entity';

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

  @ManyToMany(type => Keeper, { onDelete: 'CASCADE' })
  @JoinTable()
  keepers: Keeper[];
}