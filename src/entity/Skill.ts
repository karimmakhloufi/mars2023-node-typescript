import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Skill {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;
}
