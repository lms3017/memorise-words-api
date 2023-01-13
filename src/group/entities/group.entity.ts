import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity()
export class Group {
  save(): Group | PromiseLike<Group> {
    throw new Error('Method not implemented.');
  }
  @PrimaryGeneratedColumn()
  group_id: number;

  @Column()
  user_id: string;

  @Column()
  group_name: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}
