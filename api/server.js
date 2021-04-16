const express = require("express");
const server = express();

const ResourceRouter = require("./resource/router");

server.use(express.json());
server.use("/api/resources", ResourceRouter);

module.exports = server;
