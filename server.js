const express = require('express');
const server = express();

const cors = require('cors');

server.use(cors());
server.use(express.json());

const projectRouter = require('./routes/projectRouter');
const actionRouter = require('./routes/actionRouter');


server.use('/api/project', projectRouter);
server.use('/api/action', actionRouter);


server.get('/', (req, res) => {
  res.send(`<h2>Actions and Projects!</h2>`);
});

module.exports = server;

//   res.status(200).json({environment: process.env.NODE_ENV});
//custom middleware
// function logger(req, res, next) {
//   console.log(`${req.method} from ${req.originalUrl} at ${new Date().toISOString()}`)
//   next();
// }

