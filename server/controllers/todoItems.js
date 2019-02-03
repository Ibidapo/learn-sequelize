const TodoItem = require("../models").TodoItem;

const createItem = (req, res) => {
  return TodoItem.create({
    todoId: req.params.todoId,
    content: req.body.content
  })
    .then(todoItem => res.status(201).send(todoItem))
    .catch(error => res.status(400).send(error));
};

export { createItem };
