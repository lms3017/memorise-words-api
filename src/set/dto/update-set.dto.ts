import { PartialType } from '@nestjs/mapped-types';
import { CreateSetDto } from './create-set.dto';
import { IsNumber, IsJSON } from 'class-validator';

export class UpdateSetDto extends PartialType(CreateSetDto) {
  @IsNumber()
  readonly set_amount: number;

  @IsJSON()
  readonly set_order: JSON;

  @IsNumber()
  readonly set_round: number;

  @IsNumber()
  readonly set_rewrite: number;

  @IsNumber()
  readonly set_mode: number;
}
