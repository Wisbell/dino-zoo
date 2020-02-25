import { Test, TestingModule } from '@nestjs/testing';
import { AnimalsApiController } from './animals-api.controller';

describe('AnimalsApi Controller', () => {
  let controller: AnimalsApiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnimalsApiController],
    }).compile();

    controller = module.get<AnimalsApiController>(AnimalsApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
