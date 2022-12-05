import { Test, TestingModule } from '@nestjs/testing';
import { CivilizationsService } from './civilizations.service';

describe('CivilizationsService', () => {
  let service: CivilizationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CivilizationsService],
    }).compile();

    service = module.get<CivilizationsService>(CivilizationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
