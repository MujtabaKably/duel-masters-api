import { Controller, Get } from '@nestjs/common';
import { ResponseDTO } from 'src/dto/response.dto';
import { SetsService } from './sets.service';

@Controller('sets')
export class SetsController {
  constructor(private setsService: SetsService) {}

  @Get()
  getSets(): ResponseDTO {
    return this.setsService.getSets();
  }
}
