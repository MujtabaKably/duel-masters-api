import { Module } from '@nestjs/common';
import { RaritiesController } from './rarities.controller';
import { RaritiesService } from './rarities.service';

@Module({
  controllers: [RaritiesController],
  providers: [RaritiesService]
})
export class RaritiesModule {}
