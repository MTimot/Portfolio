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

export default { browse };
