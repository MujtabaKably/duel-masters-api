import { Injectable } from '@nestjs/common';
import { data } from '../final-processed-data';
import { Card } from './card.model';
@Injectable()
export class CardsService {
  getCards(): Card[] {
    return data?.data;
  }
}
