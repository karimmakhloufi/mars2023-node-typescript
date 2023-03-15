import { DataSource } from "typeorm";
import { Grade } from "./entity/Grade";
import { Skill } from "./entity/Skill";
import { Wilder } from "./entity/Wilder";

const dataSource = new DataSource({
  type: "sqlite",
  database: "./wildersdb.sqlite",
  synchronize: true,
  entities: [Wilder, Skill, Grade],
});

export default dataSource;
