import axios from 'axios';

const client = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_PORT}/auth`,
  withCredentials: true,
});

const AuthService = {
  async check() {
    return await client.get('/check');
  },
  async logout() {
    return await client.get('/logout');
  },
  async localLogin(info: { email: string; password: string }) {
    return await client.post('/local/login', info);
  },
};

export default AuthService;
