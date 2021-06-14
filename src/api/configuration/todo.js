import axios from 'axios';

const todoApiInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/todos',
  headers: { 'Content-Type': 'application/json' },
  timeout: 3000,
});

export default todoApiInstance;