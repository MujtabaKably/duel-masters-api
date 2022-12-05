import { Transform } from 'class-transformer';
import { IsArray, IsEnum, IsInt, IsOptional, IsString } from 'class-validator';

enum operators {
  EQ = '===',
  LTE = '<=',
  GTE = '>=',
  GT = '<',
  LT = '>',
}
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

  @IsEnum(operators)
  @IsOptional()
  powerOperator?: string = operators.EQ;

  @IsInt()
  @Transform((v) => +v.value)
  @IsOptional()
  mana?: number;

  @IsEnum(operators)
  @IsOptional()
  manaOperator?: string = operators.EQ;

  @IsOptional()
  @IsArray()
  @Transform((v) =>
    Array.isArray(v.value)
      ? v.value.map((val) => val.toLowerCase())
      : [v.value.toLowerCase()],
  )
  properties?: string[];

  @IsOptional()
  @Transform((v) => v.value.toLowerCase())
  search?: string;

  @IsOptional()
  @Transform((v) => v.value.toLowerCase())
  name?: string;
}
