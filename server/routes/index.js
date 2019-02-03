import express from "express";
import { create, list } from "../controllers/todos";
import { createItem } from "../controllers/todoItems";

const router = express.Router();

router.get("/api", (req, res) =>
  res.status(200).send({
    message: "Welcome to the Todos API"
  })
);

router.get("/api/todos", list);

router.post("/api/todos", create);

router.post("/api/todos/:todoId/items", createItem);

export default router;
