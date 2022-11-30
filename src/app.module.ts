import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CardsModule } from './cards/cards.module';
import { TypesModule } from './types/types.module';
import { RaritiesModule } from './rarities/rarities.module';
import { IllustratorsModule } from './illustrators/illustrators.module';
import { CivilizationsModule } from './civilizations/civilizations.module';
import { RacesModule } from './races/races.module';
import { SetsModule } from './sets/sets.module';

@Module({
  imports: [
    CardsModule,
    TypesModule,
    RaritiesModule,
    IllustratorsModule,
    CivilizationsModule,
    RacesModule,
    SetsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
