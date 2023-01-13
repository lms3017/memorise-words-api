import { Module } from '@nestjs/common';
import { SetService } from './set.service';
import { SetController } from './set.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Set } from './entities/set.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Set])],
  controllers: [SetController],
  providers: [SetService],
})
export class SetModule {}
