import type { RequestHandler } from "express";
import careerRepository from "./ProjectRepository";
import ProjectRepository from "./ProjectRepository";

const browse: RequestHandler = async (req, res, next) => {
  try {
    const projects = await ProjectRepository.readAll();

    res.json(projects);
  } catch (err) {
    next(err);
  }
};

const read: RequestHandler = async (req, res, next) => {
  try {
    const projectId = Number(req.params.id);
    const project = await ProjectRepository.read(projectId);

    if (project == null) {
      res.sendStatus(404);
    } else {
      res.json(project);
    }
  } catch (err) {
    next(err);
  }
};
export default { browse, read };
