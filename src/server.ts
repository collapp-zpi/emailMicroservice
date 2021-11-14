import express from "express";
import cors from "cors";
import helmet from "helmet";
import bodyParser from "body-parser";
import configHandleErrors from "./config/handleError";
import debug from "./debug";

const server = express();

server.use(helmet());
server.use(cors());
server.use(bodyParser.json());
server.use(express.static("./views/images"));

server.get("/", (req, res) => {
  res.send("OK");
});

const handlebars = require('express-handlebars');

server.engine('handlebars', handlebars.engine());
server.set('view engine', 'handlebars');
server.set("views", "./views");
server.use("/debug", debug)

configHandleErrors(server);

export default server;
