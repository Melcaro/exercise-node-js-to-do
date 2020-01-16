const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;
const auth = require('../services/auth');

const url = 'mongodb://192.168.99.100:27018';
let db = null;

async function initializeDB() {
  const client = await MongoClient.connect(url, {
    auth: auth,
    poolSize: 10,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  db = client.db('toDos');
}

async function removeDB() {
  try {
    return await db.dropDatabase();
  } catch (e) {
    console.log(e);
  }
}

async function addLists(lists) {
  try {
    return await db.collection('toDoLists').insertMany(lists);
  } catch (e) {
    console.log(e);
  }
}

function getLists() {
  try {
    return db
      .collection('toDoLists')
      .find()
      .toArray();
  } catch (e) {
    console.log(e);
  }
}

async function addOneTask(task) {
  try {
    return await db.collection('tasks').insertOne(task);
  } catch (e) {
    console.log(e);
  }
}

async function addManyTasks(tasks) {
  try {
    return await db.collection('tasks').insertMany(tasks);
  } catch (e) {
    console.log(e);
  }
}

function getTasks() {
  try {
    return db
      .collection('tasks')
      .find()
      .sort({ listID: 1 })
      .toArray();
  } catch (e) {
    console.log(e);
  }
}

async function addANewList(listName) {
  try {
    return await db.collection('toDoLists').insertOne(listName);
  } catch (e) {
    console.log(e);
  }
}

async function addANewTask(newTask) {
  try {
    return await db.collection('tasks').insertOne(newTask);
  } catch (e) {
    console.log(e);
  }
}

async function removeAList(listID) {
  try {
    return await db
      .collection('toDoLists')
      .deleteOne({ _id: ObjectId(listID) });
  } catch (e) {
    console.log(e);
  }
}

async function removeATask(taskID) {
  try {
    return await db.collection('tasks').deleteOne({ _id: ObjectId(taskID) });
  } catch (e) {
    console.log(e);
  }
}

initializeDB();

module.exports = {
  initializeDB,
  removeDB,
  addLists,
  getLists,
  addOneTask,
  addManyTasks,
  getTasks,
  addANewList,
  addANewTask,
  removeAList,
  removeATask,
};
