const express = require("express");
const server = express();

const ResourceRouter = require("./resource/router");
const ProjectRouter = require("./project/router");
const TaskRouter = require("./task/router");

// global middlewares
server.use(express.json());

// enables routes for resources, projects and tasks
server.use("/api/resources", ResourceRouter);
server.use("/api/projects", ProjectRouter);
server.use("/api/tasks", TaskRouter);

// catch all endpoint that indicates that server/api is up
server.use("*", (req, res) => {
  res.send(`<h1>API is up!</h1>`);
});

module.exports = server;
