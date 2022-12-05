import { Injectable } from '@nestjs/common';
import { ResponseDTO } from 'src/dto/response.dto';
import { data } from '../final-processed-data';
@Injectable()
export class CivilizationsService {
  getCiviliations(): ResponseDTO {
    return new ResponseDTO(
      0,
      0,
      data.civilizations.map((ill, i) => ({
        id: i + 1,
        value: ill,
        races: data.pureRaces[ill],
      })),
      0,
    );
  }
}
