import {
  Controller,
  Get,
  ParseIntPipe,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { ResponseDTO } from 'src/dto/response.dto';
import { CardsService } from './cards.service';
import { GetCardDTO } from './dto/get-card.dto';

@Controller('cards')
export class CardsController {
  constructor(private cardsService: CardsService) {}

  @Get()
  getCards(@Query() getCardDto: GetCardDTO): ResponseDTO {
    return this.cardsService.getCards(getCardDto);
  }
}
