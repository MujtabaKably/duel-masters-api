import { Injectable } from '@nestjs/common';
import { ResponseDTO } from 'src/dto/response.dto';
import { data } from 'src/final-processed-data';

@Injectable()
export class IllustratorsService {
  getIllustrators(): ResponseDTO {
    return new ResponseDTO(
      0,
      0,
      data.illustrators.map((ill, i) => ({ id: i + 1, value: ill })),
      0,
    );
  }
}
