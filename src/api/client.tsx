import axios from 'axios';

const client = axios.create({
  baseURL: `http://ec2-15-164-118-202.ap-northeast-2.compute.amazonaws.com:3005/`,
  withCredentials: true,
});

export default client;
