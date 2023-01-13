import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity()
export class Set {
  save(): Set | PromiseLike<Set> {
    throw new Error('Method not implemented.');
  }
  @PrimaryGeneratedColumn()
  set_id: number;

  @Column()
  group_id: number;

  @Column()
  set_name: string;

  @Column()
  set_amount: number;

  @Column()
  set_order: JSON;

  @Column()
  set_round: number;

  @Column()
  set_rewrite: number;

  @Column()
  set_mode: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}
