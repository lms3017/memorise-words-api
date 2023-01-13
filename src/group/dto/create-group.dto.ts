import { IsString } from 'class-validator';

export class CreateGroupDto {
  @IsString()
  readonly user_id: string;

  @IsString()
  readonly group_name: string;
}
