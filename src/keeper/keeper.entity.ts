import { Entity, Column } from 'typeorm';
import { Personnel } from 'src/personnel/personnel.entity';

@Entity()
export class Keeper extends Personnel {
  @Column()
  dinosaurSpeciality: string;

  // TODO: Add relationships here?
}