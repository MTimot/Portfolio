import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

import careerActions from "./modules/career/careerActions";
// Define item-related routes
import itemActions from "./modules/item/itemActions";
import projectActions from "./modules/projects/projectActions";

router.get("/api/items", itemActions.browse);
router.get("/api/items/:id", itemActions.read);
router.post("/api/items", itemActions.add);

router.get("/api/career", careerActions.browse);
router.get("/api/project", projectActions.browse);
router.get("/api/project/:id", projectActions.read);
router.post("/api/project", projectActions.add);
router.put("/api/project/:id", projectActions.edit);
router.delete("/api/project/:id", projectActions.destroy);
/* ************************************************************************* */

export default router;
