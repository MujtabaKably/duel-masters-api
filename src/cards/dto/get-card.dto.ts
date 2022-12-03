import { Transform } from 'class-transformer';
import { IsArray, IsInt, IsOptional } from 'class-validator';
export class GetCardDTO {
  @IsOptional()
  @IsInt()
  @Transform((v) => +v.value)
  skip?: number;

  @IsOptional()
  @IsInt()
  @Transform((v) => +v.value)
  limit?: number;

  @IsOptional()
  @IsArray()
  @Transform((v) =>
    Array.isArray(v.value)
      ? v.value.map((val) => val.toLowerCase())
      : [v.value.toLowerCase()],
  )
  civilizations?: string[];

  @IsOptional()
  @IsArray()
  @Transform((v) =>
    Array.isArray(v.value)
      ? v.value.map((val) => val.toLowerCase())
      : [v.value.toLowerCase()],
  )
  sets?: string[];

  @IsOptional()
  @IsArray()
  @Transform((v) =>
    Array.isArray(v.value)
      ? v.value.map((val) => val.toLowerCase())
      : [v.value.toLowerCase()],
  )
  illustrators?: string[];

  @IsOptional()
  @IsArray()
  @Transform((v) =>
    Array.isArray(v.value)
      ? v.value.map((val) => val.toLowerCase())
      : [v.value.toLowerCase()],
  )
  rarities?: string[];

  @IsOptional()
  @IsArray()
  @Transform((v) =>
    Array.isArray(v.value)
      ? v.value.map((val) => val.toLowerCase())
      : [v.value.toLowerCase()],
  )
  races?: string[];

  @IsOptional()
  @IsArray()
  @Transform((v) =>
    Array.isArray(v.value)
      ? v.value.map((val) => val.toLowerCase())
      : [v.value.toLowerCase()],
  )
  types?: string[];

  @IsInt()
  @Transform((v) => +v.value)
  @IsOptional()
  power?: number;

  @IsInt()
  @Transform((v) => +v.value)
  @IsOptional()
  mana?: number;

  @IsOptional()
  @IsArray()
  @Transform((v) =>
    Array.isArray(v.value)
      ? v.value.map((val) => val.toLowerCase())
      : [v.value.toLowerCase()],
  )
  properties?: string[];
}
