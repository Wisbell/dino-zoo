import { Module } from '@nestjs/common';
import { KeeperController } from './keeper.controller';
import { KeeperService } from './keeper.service';
import { KeeperRepository } from './keeper.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([KeeperRepository])],
  controllers: [KeeperController],
  providers: [KeeperService]
})
export class KeeperModule {}
