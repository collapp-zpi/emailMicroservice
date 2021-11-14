import express from "express";
import cors from "cors";
import helmet from "helmet";
import bodyParser from "body-parser";
import configHandleErrors from "./config/handleError";

const server = express();

server.use(helmet());
server.use(cors());
server.use(bodyParser.json());
server.use(express.static("./views/images"));

server.get("/", (req, res) => {
  res.send("OK");
});

configHandleErrors(server);

export default server;
