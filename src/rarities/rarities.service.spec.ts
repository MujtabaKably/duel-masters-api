import { Test, TestingModule } from '@nestjs/testing';
import { RaritiesService } from './rarities.service';

describe('RaritiesService', () => {
  let service: RaritiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RaritiesService],
    }).compile();

    service = module.get<RaritiesService>(RaritiesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
