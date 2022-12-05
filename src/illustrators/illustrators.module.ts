import { Module } from '@nestjs/common';
import { IllustratorsController } from './illustrators.controller';
import { IllustratorsService } from './illustrators.service';

@Module({
  controllers: [IllustratorsController],
  providers: [IllustratorsService]
})
export class IllustratorsModule {}
