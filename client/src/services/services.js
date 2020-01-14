import axios from 'axios';

export async function fetchAllLists() {
  const { data } = await axios.get('/api/v1/lists');
  return data;
}
