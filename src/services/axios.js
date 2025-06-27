import axios from 'axios';

export default axios.create({
  baseURL: 'https://backendsap.pedroinc.cloud',
  withCredentials: true,
});
