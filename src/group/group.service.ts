import { Injectable } from '@nestjs/common';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource } from 'typeorm';
import { Group } from './entities/group.entity';

@Injectable()
export class GroupService {
  constructor(
    @InjectRepository(Group)
    private groupRepository: Repository<Group>,
    private dataSource: DataSource,
  ) {}

  create(createGroupDto: CreateGroupDto) {
    return this.groupRepository.save(createGroupDto);
  }

  findAll(user_id: string) {
    return this.groupRepository.find({ where: { user_id } });
  }

  update(group_id: number, updateGroupDto: UpdateGroupDto) {
    return this.groupRepository.update(group_id, updateGroupDto);
  }

  remove(group_id: number) {
    return this.groupRepository.delete(group_id);
  }
}
