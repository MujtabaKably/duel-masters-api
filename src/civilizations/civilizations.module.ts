import { Module } from '@nestjs/common';
import { CivilizationsController } from './civilizations.controller';
import { CivilizationsService } from './civilizations.service';

@Module({
  controllers: [CivilizationsController],
  providers: [CivilizationsService]
})
export class CivilizationsModule {}
