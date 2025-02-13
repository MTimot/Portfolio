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

const add: RequestHandler = async (req, res, next) => {
  try {
    // Extract the item data from the request body
    const newProject = {
      title: req.body.title,
      technos: req.body.technos,
      main_screen: req.body.main_screen,
      screenshot2: req.body.screenshot2,
      screenshot3: req.body.screenshot3,
      description: req.body.description,
    };
    // Create the item
    const insertId = await ProjectRepository.create(newProject);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted item
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const edit: RequestHandler = async (req, res, next) => {
  try {
    const project = {
      id: Number(req.params.id),
      title: req.body.title,
      technos: req.body.technos,
      main_screen: req.body.main_screen,
      screenshot2: req.body.screenshot2,
      screenshot3: req.body.screenshot3,
      description: req.body.description,
    };
    const affectedRows = await ProjectRepository.update(project);
    if (affectedRows === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  } catch (err) {
    next(err);
  }
};
const destroy: RequestHandler = async (req, res, next) => {
  try {
    const projectId = Number(req.params.id);

    await ProjectRepository.delete(projectId);

    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};
export default { browse, read, add, edit, destroy };
