import { Repository, EntityRepository } from 'typeorm';
import { KeeperDto } from './keeper.dto';
import { Keeper } from './keeper.entity';

@EntityRepository(Keeper)
export class KeeperRepository extends Repository<Keeper> {
  async createKeeper(createKeeperDto: KeeperDto) {
    const keeper = KeeperDto.toKeeper(createKeeperDto);
    return keeper.save();
  }

  async updateKeeper(existingKeeper: Keeper, updatedKeeperDto: KeeperDto) {
    const updatedKeeper = KeeperDto.toKeeper(updatedKeeperDto);
    existingKeeper.firstName = updatedKeeper.firstName;
    existingKeeper.lastName = updatedKeeper.lastName;
    existingKeeper.gender = updatedKeeper.gender;
    existingKeeper.age = updatedKeeper.age;
    existingKeeper.dateOfHire = updatedKeeper.dateOfHire;
    existingKeeper.imageUrl = updatedKeeper.imageUrl;
    existingKeeper.speciality = updatedKeeper.speciality;
    return this.save(existingKeeper);
  }
}