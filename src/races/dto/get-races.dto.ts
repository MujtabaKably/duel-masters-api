import { IsArray } from 'class-validator';
import { Transform } from 'class-transformer';
export class GetRacesDTO {
  @IsArray()
  @Transform((v) =>
    Array.isArray(v.value)
      ? v.value.map((val) => val.toLowerCase())
      : [v.value.toLowerCase()],
  )
  civ: string[];
}
