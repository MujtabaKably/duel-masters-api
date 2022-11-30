import { Injectable } from '@nestjs/common';
import { data } from '../final-processed-data';

type Filters = {
  sets?: any[];
  illustrators?: any[];
  rarities?: any[];
  civilization?: any[];
  races?: any[];
  types?: any[];
  power?: string | number;
  mana?: string | number;
  properties?: any[];
};

@Injectable()
export class CardsService {
  getCards(skip = 0, limit = 15, filters: Filters = {}): any {
    const totalData = data?.data;

    return {
      skip,
      limit,
      totalRecords: totalData.length,
      data: totalData.slice(skip, skip + limit),
    };
  }
}
