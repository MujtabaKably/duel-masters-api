import { Test, TestingModule } from '@nestjs/testing';
import { IllustratorsController } from './illustrators.controller';

describe('IllustratorsController', () => {
  let controller: IllustratorsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IllustratorsController],
    }).compile();

    controller = module.get<IllustratorsController>(IllustratorsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
