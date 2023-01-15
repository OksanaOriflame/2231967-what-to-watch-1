import axios from 'axios';

const createApi = () =>
  axios.create({
    baseURL: 'https://10.react.pages.academy/wtw',
    timeout: 5000
  });

export default createApi;
