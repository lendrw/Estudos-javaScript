import { Router } from "express";
import * as userController from "../controllers/userController";

const router = Router();

router.get("/users", userController.getUsers);
router.get("/users/:id", userController.getUser);
router.post("/users", userController.createUser);

export default router;
