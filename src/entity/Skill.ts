import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Skill {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;
}
