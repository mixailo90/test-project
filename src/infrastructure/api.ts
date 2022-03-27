import Axios from 'axios';

const api = Axios.create({
  baseURL: 'https://restcountries.com/v3.1'
});

export { api };
