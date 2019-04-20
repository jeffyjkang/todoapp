// import express from express framework
const express = require("express");
// import helemt to secure express by setting various HTTP headers
const helmet = require("helmet");
// import morgan HTTP request logger middleware
const morgan = require("morgan");
// import cors, cross origin resource sharing
const cors = require("cors");
// server
const server = express();
// import routes
const users = require("./routes/users");
const todos = require("./routes/todos");
// server use
server.use(express.json());
server.use(helmet());
server.use(morgan("dev"));
server.use(cors());
// server use routes
server.use("/users", users);
server.use("/todos", todos);
// check for server
server.get("/", (req, res) => {
  res.send("<h1>Server Running<h1>");
});
// port
const PORT = process.env.PORT || 9000;
server.listen(PORT, () => console.log("API running..."));

module.exports = { server };
