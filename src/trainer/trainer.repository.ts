import { Repository, EntityRepository } from 'typeorm';
import { TrainerDto } from './trainer.dto';
import { Trainer } from './trainer.entity';

@EntityRepository(Trainer)
export class TrainerRepository extends Repository<Trainer> {
  async createTrainer(createTrainerDto: TrainerDto) {
    const trainer = TrainerDto.toTrainer(createTrainerDto);
    return trainer.save();
  }

  async updateTrainer(existingTrainer: Trainer, updatedTrainerDto: TrainerDto) {
    const updatedTrainer = TrainerDto.toTrainer(updatedTrainerDto);
    existingTrainer.firstName = updatedTrainer.firstName;
    existingTrainer.lastName = updatedTrainer.lastName;
    existingTrainer.gender = updatedTrainer.gender;
    existingTrainer.age = updatedTrainer.age;
    existingTrainer.dateOfHire = updatedTrainer.dateOfHire;
    existingTrainer.imageUrl = updatedTrainer.imageUrl;
    existingTrainer.trickExpertise = updatedTrainer.trickExpertise;
    return this.save(existingTrainer);
  }
}