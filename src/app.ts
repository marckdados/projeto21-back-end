import express, { json } from "express";
import cors from "cors";

const app = express();

app
  .use(cors())
  .use(json())
  .get("/health", (_req, res) => {
    return res.send("OK !");
  });

export default app;
