import { Injectable } from '@nestjs/common';
import { ResponseDTO } from 'src/dto/response.dto';
import { data } from 'src/final-processed-data';

@Injectable()
export class RacesService {
  getRaces(civ = []): ResponseDTO {
    console.log(civ);
    return new ResponseDTO(
      0,
      0,
      !civ.length
        ? data.flattedRaces
        : data.flattedRaces.filter((r) =>
            civ.includes(r.civilization.toLowerCase()),
          ),
      0,
    );
  }
}
