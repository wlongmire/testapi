import express from 'express';
import mongoose from 'mongoose';
import graphql from 'graphql';
import bodyParser from 'body-parser';
import graphqlHTTP from 'express-graphql';
import passport from 'passport'
import config from  './config';
import http from 'http'

const app = express();

import models from './models';

mongoose.Promise = Promise;
mongoose.connect(config.mongoURI);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

/* Component Loading */

import example from './components/Example';

example.use(app, {
  name: 'Example',
  routePrefix: 'api/example'
});

const server = http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

function normalizePort(val) {
  let port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }

  return false;
}

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  let bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  console.log('Listening on ' + bind);
}
