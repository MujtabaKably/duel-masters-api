import { Controller, Get } from '@nestjs/common';
import { ResponseDTO } from 'src/dto/response.dto';
import { IllustratorsService } from './illustrators.service';

@Controller('illustrators')
export class IllustratorsController {
  constructor(private illustratorsService: IllustratorsService) {}

  @Get()
  getIllustrators(): ResponseDTO {
    return this.illustratorsService.getIllustrators();
  }
}
