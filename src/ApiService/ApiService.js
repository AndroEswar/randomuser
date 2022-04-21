import axios from 'axios';

const ApiService = axios.create({
  baseURL: 'https://randomuser.me'
})

export default ApiService;