import express from "express";
import { create, list } from "../controllers/todos";

const router = express.Router();

router.get("/api", (req, res) =>
  res.status(200).send({
    message: "Welcome to the Todos API"
  })
);

router.get("/api/todos", list);

router.post("/api/todos", create);

export default router;
