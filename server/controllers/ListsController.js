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
  return res.status(201);
}

module.exports = { getListsWithTasks, addAList };
