import axios from 'axios';

// Create an instance of Axios with a base URL
const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
});

export default axiosInstance;
