import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from "typeorm";

import { Skill } from "./Skill";

@Entity()
export class Wilder {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @ManyToMany(() => Skill, { eager: true })
  @JoinTable()
  skills: Skill[];
}
