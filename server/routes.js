const ListsRouter = require('./routes/ListsRouter');
const TasksRouter = require('./routes/TasksRouter');

function routes(app) {
  app.use('/api/v1/todos', ListsRouter);
  app.use('/api/v1/tasks', TasksRouter);
}

module.exports = routes;
