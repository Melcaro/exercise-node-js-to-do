const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
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
    return await db.collection('toDos').drop({});
  } catch (e) {
    console.log(e);
  }
}

async function addLists(lists) {
  try {
    return await db.collection('toDos').insertMany(lists);
  } catch (e) {
    console.log(e);
  }
}

module.exports = { initializeDB, removeDB, addLists };
