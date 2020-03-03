import { Entity, Column } from 'typeorm';
import { Personnel } from '../personnel/personnel.entity';

@Entity()
export class Keeper extends Personnel {
  @Column()
  speciality: string;

  // TODO: Add relationships here?
}