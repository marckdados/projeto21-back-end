import { usersPost } from "@/controllers";
import { userCreaterMiddleware } from "@/middlewares";
import { Router } from "express";

const usersRouter = Router();

usersRouter.post("/", userCreaterMiddleware, usersPost);

export { usersRouter };
