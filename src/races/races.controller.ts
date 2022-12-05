import { Controller, Get, Query } from '@nestjs/common';
import { GetRacesDTO } from './dto/get-races.dto';
import { RacesService } from './races.service';

@Controller('races')
export class RacesController {
  constructor(private racesService: RacesService) {}

  @Get()
  getRaces(@Query() getRacesDTO: GetRacesDTO) {
    return this.racesService.getRaces(getRacesDTO.civ);
  }
}
