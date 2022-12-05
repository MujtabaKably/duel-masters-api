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

    let totalData = data?.data
      .filter((f) =>
        getFilter(types) ? types.includes(f.type.toLowerCase()) : true,
      )
      .filter((f) =>
        getFilter(sets)
          ? sets.includes(f.setName) ||
            sets.reduce(
              (acc, set) =>
                f.printings.map((p) => p.setName?.toLowerCase()).includes(set),
              false,
            )
          : true,
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
      )
      .filter((f) =>
        getFilter(races)
          ? races.reduce(
              (acc, val) =>
                !!(acc || f.subtypes.map((c) => c.toLowerCase()).includes(val)),
              false,
            )
          : true,
      )
      .filter((f) =>
        getFilter(illustrators)
          ? illustrators.reduce(
              (acc, val) =>
                !!(
                  acc ||
                  f.printings
                    .map((c) => c.illustrator.toLowerCase())
                    .includes(val)
                ),
              false,
            )
          : true,
      )
      .filter((f) =>
        getFilter(rarities)
          ? rarities.reduce(
              (acc, val) =>
                !!(
                  acc ||
                  f.printings.map((c) => c.rarity.toLowerCase()).includes(val)
                ),
              false,
            )
          : true,
      )
      .filter((f) => (mana ? eval(`${f.cost} ${manaOperator} ${mana}`) : true))
      .filter((f) =>
        power
          ? f.power
            ? eval(`${+f.power.replace('+', '')} ${powerOperator} ${power}`)
            : false
          : true,
      );

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
