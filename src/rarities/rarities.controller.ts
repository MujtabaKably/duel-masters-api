import { Controller, Get } from '@nestjs/common';
import { ResponseDTO } from 'src/dto/response.dto';
import { RaritiesService } from './rarities.service';

@Controller('rarities')
export class RaritiesController {
  constructor(private raritiesService: RaritiesService) {}

  @Get()
  getRarities(): ResponseDTO {
    return this.raritiesService.getRarities();
  }
}
