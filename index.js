'use strict';

require('dotenv').config;
const { app, start } = require('./server.js');
const PORT = process.env.PORT || 3002;

start(PORT); 