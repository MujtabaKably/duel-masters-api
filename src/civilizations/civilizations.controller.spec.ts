import { Test, TestingModule } from '@nestjs/testing';
import { CivilizationsController } from './civilizations.controller';

describe('CivilizationsController', () => {
  let controller: CivilizationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CivilizationsController],
    }).compile();

    controller = module.get<CivilizationsController>(CivilizationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
