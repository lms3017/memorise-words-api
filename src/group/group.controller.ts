import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { GroupService } from './group.service';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';

@Controller('group')
export class GroupController {
  constructor(private readonly groupService: GroupService) {}

  @Post()
  create(@Body() createGroupDto: CreateGroupDto) {
    return this.groupService.create(createGroupDto);
  }

  @Get(':user_id')
  findAll(@Param('user_id') user_id: string) {
    return this.groupService.findAll(user_id);
  }

  @Patch(':group_id')
  update(
    @Param('group_id') group_id: string,
    @Body() updateGroupDto: UpdateGroupDto,
  ) {
    return this.groupService.update(+group_id, updateGroupDto);
  }

  @Delete(':group_id')
  remove(@Param('group_id') group_id: string) {
    return this.groupService.remove(+group_id);
  }
}
