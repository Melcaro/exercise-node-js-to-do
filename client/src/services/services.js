import axios from 'axios';

export async function fetchAllLists() {
  return await axios.get('/api/v1/todos');
}
