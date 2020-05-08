const express = require('express');

const projectRouter = require('./posts/projectRouter');
const actionRouter = require('./users/actionRouter');

/*const cors = require('cors')
  server.use(cors());
*/
const server = express();
server.use(express.json());

server.use("/api/projects", projectRouter);
server.use("/api/actions", actionRouter);

server.use(logger);

server.get('/', (req, res) => {
  res.send(`<h2>Actions and Projects!</h2>`);
  res.status(200).json({environment: process.env.NODE_ENV});
});

//custom middleware
function logger(req, res, next) {
  console.log(`${req.method} from ${req.originalUrl} at ${new Date().toISOString()}`)
  next();
}

module.exports = server;
