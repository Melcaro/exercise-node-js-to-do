const ToDoStore = require('../store/ToDoStore');

async function getListsWithTasks(req, res) {
  const lists = await ToDoStore.getLists();
  const tasks = await ToDoStore.getTasks();
  const listsWithTasks = lists.map(list => {
    return {
      ...list,
      tasks: tasks.filter(task => list._id.equals(task.listID)),
    };
  });
  res.json(listsWithTasks);
}

async function addAList(req, res) {
  await ToDoStore.addANewList(req.body);
  return res.sendStatus(201);
}

async function deleteAList(req, res) {
  const { listID } = req.params;
  await ToDoStore.removeAList(listID);
  return res.sendStatus(204);
}
module.exports = { getListsWithTasks, addAList, deleteAList };
