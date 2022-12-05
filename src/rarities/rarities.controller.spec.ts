import { Test, TestingModule } from '@nestjs/testing';
import { RaritiesController } from './rarities.controller';

describe('RaritiesController', () => {
  let controller: RaritiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RaritiesController],
    }).compile();

    controller = module.get<RaritiesController>(RaritiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
