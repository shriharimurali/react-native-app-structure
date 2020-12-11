/**
 * Axios Instance creation
 * Creates an Axios instance and sets the base url for all requests.
 */
import axios from 'axios';
import { API_BASE_V1 } from 'src/constants/apiUrls';

const axiosInstance = axios.create({
  baseURL: API_BASE_V1,
  timeout: 30000, // 30 seconds max timeout
});

export default axiosInstance;
