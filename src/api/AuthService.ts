import client from './client';

const AuthService = {
  async check() {
    return await client.get('auth/check');
  },
  async logout() {
    return await client.get('auth/logout');
  },
  async localLogin(info: { email: string; password: string }) {
    return await client.post('auth/local/login', info);
  },
};

export default AuthService;
