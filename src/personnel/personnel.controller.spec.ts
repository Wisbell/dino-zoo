import { Test, TestingModule } from '@nestjs/testing';
import { PersonnelController } from './personnel.controller';

describe('Personnel Controller', () => {
  let controller: PersonnelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PersonnelController],
    }).compile();

    controller = module.get<PersonnelController>(PersonnelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
