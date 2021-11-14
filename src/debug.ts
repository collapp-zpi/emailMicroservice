import express from "express";
import cors from "cors";
import helmet from "helmet";
import chalk from "chalk";

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.static("./views/images"));

const handlebars = require('express-handlebars');

server.engine('handlebars', handlebars.engine());
server.set('view engine', 'handlebars');
server.set("views", "./views");


server.get("/", (req, res) => {
  res.send("OK");
});

server.get("/success", (req, res) => {
  res.render("success-build", {
    layout: false,
    name: "John Smith",
    plugin: "Weather",
    url: "https://translate.google.com/",
  });
});

server.get("/error", (req, res) => {
  res.render("error-build", {
    layout: false,
    name: "John Smith",
    plugin: "Weather",
    url: "https://translate.google.com/",
  });
});

server.get("/login", (req, res) => {
  res.render("login", {
    layout: false,
    email: "john.smith@example.com",
    url: "https://translate.google.com/",
  });
});

server.get("/invite", (req, res) => {
  res.render("invite", {
    layout: false,
    from: "John Smith",
    space: "Space name",
    url: "https://translate.google.com/",
  });
});

server.listen(process.env.PORT, async () => {
  console.log(
    chalk.green(
      `Server is running on port: ${chalk.greenBright.bold(
        process.env.PORT
      )} for handlebars debugging.`
    )
  );
});
