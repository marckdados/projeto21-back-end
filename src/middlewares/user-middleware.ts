import { userCreateSchema } from "@/schemas";
import { Request, Response, NextFunction } from "express";
import httpStatus from "http-status";

export function userCreaterMiddleware(req: Request, res: Response, next: NextFunction) {
  const body = req.body as userCreateType;
  const { error } = userCreateSchema.validate(body, { abortEarly: false });
  if (!error) {
    return next();
  }
  return res.sendStatus(httpStatus.BAD_REQUEST).send(error.message);
}

export type userCreateType = {
  email: string;
  password: string;
};
