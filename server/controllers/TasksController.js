const ToDoStore = require('../store/ToDoStore');

async function addATask(req, res) {
  const newTask = req.body;
  await ToDoStore.addANewTask(newTask);
  res.sendStatus(201);
}

async function deleteATask(req, res) {
  const { taskID } = req.params;
  await ToDoStore.removeATask(taskID)
  return res.sendStatus(204);
}

module.exports = { addATask, deleteATask };
 