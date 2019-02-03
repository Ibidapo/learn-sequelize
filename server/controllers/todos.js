const Todo = require("../models").Todo;
const TodoItem = require("../models").TodoItem;

const create = (req, res) => {
  return Todo.create({
    title: req.body.title
  })
    .then(todo => res.status(201).send(todo))
    .catch(error => res.status(400).send(error));
};

const list = (req, res) => {
  return Todo.findAll({
    include: [
      {
        model: TodoItem,
        as: "todoItems"
      }
    ]
  })
    .then(todos => res.status(200).send(todos))
    .catch(error => res.send(400).send(error));
};

export { create, list };
