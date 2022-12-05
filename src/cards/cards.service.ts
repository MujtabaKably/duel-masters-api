import { Injectable } from '@nestjs/common';
import { ResponseDTO } from 'src/dto/response.dto';
import { data } from '../final-processed-data';
import { GetCardDTO } from './dto/get-card.dto';
import * as FuzzySearch from 'fuzzy-search';

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
      manaOperator,
      power,
      powerOperator,
      races,
      rarities,
      sets,
      name,
      search,
      properties,
    } = getCardsDto;

    let totalData = data?.data;

    if (getFilter(types)) {
      totalData = totalData.filter((f) => types.includes(f.type.toLowerCase()));
    }

    if (getFilter(sets)) {
      totalData = totalData.filter(
        (f) =>
          sets.includes(f.setName) ||
          sets.reduce(
            (acc, set) =>
              acc ||
              f.printings.map((p) => p.setName?.toLowerCase()).includes(set),
            false,
          ),
      );
    }

    if (getFilter(civilizations)) {
      totalData = totalData.filter((f) =>
        civilizations.reduce(
          (acc, val) =>
            !!(
              acc || f.civilizations.map((c) => c.toLowerCase()).includes(val)
            ),
          false,
        ),
      );
    }

    if (getFilter(races)) {
      totalData = totalData.filter((f) =>
        races.reduce(
          (acc, val) =>
            !!(acc || f.subtypes.map((c) => c.toLowerCase()).includes(val)),
          false,
        ),
      );
    }

    if (getFilter(illustrators)) {
      totalData = totalData.filter((f) =>
        illustrators.reduce(
          (acc, val) =>
            !!(
              acc ||
              f.printings.map((c) => c.illustrator.toLowerCase()).includes(val)
            ),
          false,
        ),
      );
    }

    if (getFilter(rarities)) {
      totalData = totalData.filter((f) =>
        rarities.reduce(
          (acc, val) =>
            !!(
              acc ||
              f.printings.map((c) => c.rarity.toLowerCase()).includes(val)
            ),
          false,
        ),
      );
    }

    if (mana) {
      totalData = totalData.filter((f) =>
        eval(`${f.cost} ${manaOperator} ${mana}`),
      );
    }
    if (power) {
      totalData = totalData.filter((f) =>
        f.power
          ? eval(`${+f.power.replace('+', '')} ${powerOperator} ${power}`)
          : false,
      );
    }

    if (name) {
      const searcherName = new FuzzySearch(totalData, ['name'], {
        caseSensitive: false,
        sort: true,
      });
      totalData = searcherName.search(name).slice(skip, skip + limit);
    } else if (search) {
      const searcher = new FuzzySearch(
        totalData,
        [
          'name',
          'subtypes',
          'cost',
          'power',
          'text',
          'type',
          'printings.set',
          'printings.flavor',
          'printings.illustrator',
          'printings.rarity',
        ],
        {
          caseSensitive: false,
          sort: true,
        },
      );
      totalData = searcher.search(search).slice(skip, skip + limit);
    }
    const pageData = totalData.slice(skip, skip + limit);
    return new ResponseDTO(skip, limit, pageData, totalData.length);
  }
}

const getFilter = (val: any[]): boolean => !!(val && val.length);
