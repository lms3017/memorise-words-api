import { IsString, IsNumber } from 'class-validator';

export class CreateSetDto {
  @IsNumber()
  readonly group_id: number;

  @IsString()
  readonly set_name: string;
}
