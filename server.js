'use strict';

const express = require('express');
const app = express(); // this is our app singleton

app.get('/', (request, response) => {
  try {
    response.status(200).send('Proof of life');
  } catch(e) {
    console.log(e);
  }
});

// request parameter
app.get('/params/:name', (request, response) => {
  let name = request.params.name;
  response.json({
    name,
  });
});

// query parameters
app.get('/query', (request, response) => {
  let name = request.query.name;
  let role = request.query.role;
  response.json({
    name,
    role,
  });
});

app.get('/hello', (request, response) => {
  response.json({
    name: 'JACOB',
  });
});

module.exports = {
  app,
  start: (port) => {
    app.listen(port, () => {
      console.log(`Server Up on ${port}`);
    });
  },
};
