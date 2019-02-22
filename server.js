const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const dishesRouter = require('./data/routes/dishesRoute');

const server = express();
server.use(express.json());
server.use(helmet());
server.use(morgan('short'));
server.use(cors());

server.get('/', (req, res) => {
  res.send('<h1>Server is working, on route api/dishes and api/recipes</h1>');
});

server.use('/api/dishes', dishesRouter);

module.exports = server;
