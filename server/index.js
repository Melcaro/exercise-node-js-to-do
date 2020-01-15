const express = require('express');
const middlewares = require('./middlewares');
const routes = require('./routes');

const app = express();

middlewares(app);
routes(app);

const PORT = 5000;

app.listen(process.env.PORT || PORT, () =>
  console.log(`Server launched on ${PORT}`)
);
