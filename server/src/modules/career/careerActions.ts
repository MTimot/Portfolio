import type { RequestHandler } from "express";
import careerRepository from "./careerRepository";

const browse: RequestHandler = async (req, res, next) => {
  try {
    const career = await careerRepository.readAll();

    res.json(career);
  } catch (err) {
    next(err);
  }
};

export default { browse };
