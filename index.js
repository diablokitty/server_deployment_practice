'use strict';

require('dotenv').config;
const app = require('./server.js');
const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
  console.log('App is running');

});