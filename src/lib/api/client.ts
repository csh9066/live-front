import axios from 'axios';

const client = axios.create({
  withCredentials: true,
  baseURL: 'http://localhost:3005',
});

export default client;
