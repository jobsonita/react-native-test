import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.tst2.escolaapp.com/api/v1/',
});
