const express = require('express');
const routes = require('./routes');
require('express-async-errors');

const app = express();

/* Middlewares */

app.use(express.json());
app.use(routes);

// Error handler
app.use((error, request, response, next) => {
  console.log('ERROR HANDLER');
  console.log(error);
  response.sendStatus(500);
});

/* Server */

app.listen(3000, () => console.log('Server started at http://localhost:3000'));
