import Todo from "../models/todo";

const create = (res, req) => {
  return Todo.create({
    title: req.boby.title
  })
    .then(todo => res.status(201).send(todo))
    .catch(error => res.status(400).send(error));
};

export default create;
