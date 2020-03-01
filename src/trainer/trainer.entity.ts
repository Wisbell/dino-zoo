import { Entity, Column } from 'typeorm';
import { Personnel } from '../personnel/personnel.entity';

@Entity()
export class Trainer extends Personnel {
  @Column()
  trickExpertise: string;

  // TODO: Add relationships here?
}