const ToDoStore = require('../store/ToDoStore');

async function addATask(req, res) {
  const newTask = req.body;
  await ToDoStore.addANewTask(newTask);
  res.sendStatus(201);
}

module.exports = { addATask };
