import axios from 'axios';

export async function fetchAllLists() {
  return await axios.get('/api/v1/todos');
}

export async function addAList(listName) {
  return await axios.post('/api/v1/todos', { name: listName });
}

export async function addATask(taskName, listID) {
  return await axios.post('/api/v1/tasks', {
    description: taskName,
    listID,
  });
}

export async function deleteList(listID) {
  return await axios.delete(`/api/v1/todos/${listID}`);
}

export async function deleteTask(taskID) {
  return await axios.delete(`/api/v1/tasks/${taskID}`);
}
