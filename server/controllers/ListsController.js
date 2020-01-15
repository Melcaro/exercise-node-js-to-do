const ToDoStore = require('../store/ToDoStore');

async function getLists(req, res) {
  const lists = await ToDoStore.getLists();
  res.send(lists);
}

module.exports = { getLists };
