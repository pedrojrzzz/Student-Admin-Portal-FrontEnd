import axios from 'axios';

export default axios.create({
  baseURL: 'http://backendsap.pedroinc.cloud',
  withCredentials: true,
});
