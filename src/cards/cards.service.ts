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
    const totalData = data?.data.filter((f) => f || filters);
    const pageData = totalData.slice(skip, skip + limit);
    return {
      skip,
      limit,
      count: pageData.length,
      totalRecords: totalData.length,
      data: pageData,
    };
  }
}
