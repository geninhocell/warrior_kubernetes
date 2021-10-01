import axios from 'axios';

import { config } from '../config/env';

console.log(config.REACT_APP_API_URL)

const http = axios.create({
  baseURL: config.REACT_APP_API_URL,
})

export { http }
