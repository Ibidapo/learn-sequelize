import express from "express";
import { create, list, retrieve, update, destroy } from "../controllers/todos";
import { createItem } from "../controllers/todoItems";

const router = express.Router();

router.get("/api", (req, res) =>
  res.status(200).send({
    message: "Welcome to the Todos API"
  })
);

router.post("/api/todos", create);
router.get("/api/todos", list);
router.get("/api/todos/:todoId", retrieve);
router.put("/api/todos/:todoId", update);
router.delete("/api/todos/:todoId", destroy);
router.post("/api/todos/:todoId/items", createItem);

export default router;
