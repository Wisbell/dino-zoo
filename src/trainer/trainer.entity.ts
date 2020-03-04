import { Entity, Column, OneToMany } from 'typeorm';
import { Personnel } from '../personnel/personnel.entity';
import { Animal } from '../animal/animal.entity';

@Entity()
export class Trainer extends Personnel {
  @Column()
  trickExpertise: string;

  @OneToMany(type => Animal, animal => animal.trainer)
  animals: Animal[];


  // TODO: Add relationships here?
}