import { Entity, Column } from 'typeorm';
import { Personnel } from 'src/personnel/personnel.entity';

@Entity()
export class Trainer extends Personnel {
  @Column()
  trickSpeciality: string;

  // TODO: Add relationships here?
}