import axios from 'axios';
import { getToken } from './token';

const createApi = () => {
  const api = axios.create({
    baseURL: 'https://10.react.pages.academy/wtw',
    timeout: 5000
  });

  api.interceptors.request.use((config) => {
    const token = getToken();

    if (!token || !config.headers) {
      return config;
    }

    config.headers['X-token'] = token;

    return config;
  });

  return api;
};

const api = createApi();

export default api;
