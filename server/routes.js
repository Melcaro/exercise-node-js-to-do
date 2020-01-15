const ListsRouter = require('./routes/ListsRouter');

function routes(app) {
  app.use('/api/v1/todos', ListsRouter);
}

module.exports = routes;
