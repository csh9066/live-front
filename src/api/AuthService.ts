import axios from 'axios';

const client = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_PORT}/auth`,
  withCredentials: true,
});

const AuthService = {
  async checkAuth() {
    return await client.get('/check');
  },
  async logout() {
    return await client.get('/logout');
  },
};

export default AuthService;
