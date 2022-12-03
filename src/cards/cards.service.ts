import { Injectable } from '@nestjs/common';
import { ResponseDTO } from 'src/dto/response.dto';
import { data } from '../final-processed-data';
import { GetCardDTO } from './dto/get-card.dto';

@Injectable()
export class CardsService {
  getCards(getCardsDto: GetCardDTO): ResponseDTO {
    const {
      skip,
      limit,
      types,
      civilizations,
      illustrators,
      mana,
      power,
      properties,
      races,
      rarities,
      sets,
    } = getCardsDto;
    console.log(
      types,
      civilizations,
      illustrators,
      mana,
      power,
      properties,
      races,
      rarities,
      sets,
    );
    const totalData = data?.data
      .filter((f) =>
        getFilter(types) ? types.includes(f.type.toLowerCase()) : true,
      )
      .filter((f) =>
        getFilter(civilizations)
          ? civilizations.reduce(
              (acc, val) =>
                !!(
                  acc ||
                  f.civilizations.map((c) => c.toLowerCase()).includes(val)
                ),
              false,
            )
          : true,
      );
    const pageData = totalData.slice(skip, skip + limit);
    return new ResponseDTO(skip, limit, pageData, totalData.length);
  }
}

const getFilter = (val: any[]): boolean => !!(val && val.length);
