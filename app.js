import express from "express";
import bodyParser from "body-parser";
import logger from "morgan";

import router from "./server/routes/index";

const app = express();
const port = process.env.PORT || 8000;

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

app.get("*", (req, res) =>
  res.status(200).send({
    message: "Welcome to the beginning of nothingness"
  })
);

app.listen(port);

export default app;
