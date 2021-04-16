const express = require("express");
const server = express();

const ResourceRouter = require("./resource/router");
const ProjectRouter = require("./project/router");

server.use(express.json());
server.use("/api/resources", ResourceRouter);
server.use("/api/projects", ProjectRouter);

module.exports = server;
