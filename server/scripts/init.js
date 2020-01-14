const ToDoStore = require('../store/ToDoStore');

const lists = [{ name: 'To DO' }, { name: 'Ongoing' }, { name: 'Done' }];

async function initialize() {
  await ToDoStore.initializeDB();
  await ToDoStore.removeDB();
  ToDoStore.addLists(lists);
}

try {
  initialize();
} catch (e) {
  console.log(e);
}
