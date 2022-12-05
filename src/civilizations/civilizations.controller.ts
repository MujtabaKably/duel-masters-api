import { Controller, Get } from '@nestjs/common';
import { ResponseDTO } from 'src/dto/response.dto';
import { CivilizationsService } from './civilizations.service';

@Controller('civilizations')
export class CivilizationsController {
  constructor(private civilizationService: CivilizationsService) {}

  @Get()
  getCivilizations(): ResponseDTO {
    return this.civilizationService.getCiviliations();
  }
}
