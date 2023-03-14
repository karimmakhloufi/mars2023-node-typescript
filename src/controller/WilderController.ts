import { Wilder } from "../entity/Wilder";
import { Skill } from "../entity/Skill";
import dataSource from "../utils";
import { In } from "typeorm";
import { Request, Response } from "express";

const wilderController = {
  create: (req: Request, res: Response) => {
    dataSource
      .getRepository(Wilder)
      .save(req.body)
      .then(() => {
        res.send("Wilder Created");
      })
      .catch((err) => {
        console.log("error", err);
        res.send("Error while creating the Wilder");
      });
  },
  read: async (req: Request, res: Response) => {
    try {
      const allWilders = await dataSource
        .getRepository(Wilder)
        .find({ order: { id: "DESC" } });
      res.send(allWilders);
    } catch (err) {
      console.log(err);
      res.send("Error while reading the wilders");
    }
  },
  delete: async (req: Request, res: Response) => {
    try {
      await dataSource.getRepository(Wilder).delete(req.params.id);
      res.send("Wilder deleted");
    } catch (err) {
      console.log(err);
      res.send("Error while deleting the wilder");
    }
  },
  update: async (req: Request, res: Response) => {
    try {
      const updateResult = await dataSource
        .getRepository(Wilder)
        .update(req.params.id, req.body);
      res.send(updateResult);
    } catch (err) {
      console.log(err);
      res.send("Error while updating");
    }
  },
  addSkills: async (req: Request, res: Response) => {
    console.log("addskills controller");
    try {
      const wilderToUpdate = await dataSource
        .getRepository(Wilder)
        .findOneByOrFail({ name: req.body.wildername });
      console.log("wilder", wilderToUpdate);
      const skillsToAdd = await dataSource
        .getRepository(Skill)
        .findBy({ name: In(req.body.skillname) });
      console.log("Skills", skillsToAdd);
      wilderToUpdate.skills.push(...skillsToAdd);
      console.log("updated wilder", wilderToUpdate);
      await dataSource.getRepository(Wilder).save(wilderToUpdate);
      res.send("Wilder updated");
    } catch (err) {
      console.log("error", err);
      res.send("Error while adding skill");
    }
  },
};

export default wilderController;
