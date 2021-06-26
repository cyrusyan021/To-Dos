import axios from 'axios';

const todoApiInstance = axios.create({
  baseURL: process.env.REACT_APP_TODO_ENDPOINT,
  headers: { 'Content-Type': 'application/json' },
  timeout: 3000,
});

export default todoApiInstance;