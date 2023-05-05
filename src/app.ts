import express, { json } from "express";
import cors from "cors";

import { usersRouter } from "./routers";

const app = express();

app
  .use(cors())
  .use(json())
  .get("/health", (_req, res) => {
    return res.send("OK !");
  })
  .use("/sign-up", usersRouter);

export default app;
