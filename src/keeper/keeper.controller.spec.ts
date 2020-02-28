import { Test, TestingModule } from '@nestjs/testing';
import { KeeperController } from './keeper.controller';

describe('Keeper Controller', () => {
  let controller: KeeperController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KeeperController],
    }).compile();

    controller = module.get<KeeperController>(KeeperController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
