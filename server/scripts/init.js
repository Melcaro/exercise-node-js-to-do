const ToDoStore = require('../store/ToDoStore');

const lists = [{ name: 'To Do' }, { name: 'Ongoing' }, { name: 'Done' }];

const tasks = [
  { description: 'Finish Death Strandings', listID: '' },
  { description: 'Replay The Witcher 3', listID: '' },
  { description: 'Finish Fire Emblem TH', listID: '' },
];

async function initialize() {
  await ToDoStore.initializeDB();
  await ToDoStore.removeDB();
  await ToDoStore.addLists(lists);
  const allLists = await ToDoStore.getLists();
  const listId = allLists[0]._id;

  const listsWithTasks = tasks.map(task => {
    return {
      ...task,
      listID: listId,
    };
  });
  ToDoStore.addManyTasks(listsWithTasks);
}

try {
  initialize();
} catch (e) {
  console.log(e);
}
