import axios from 'axios';
import { CURRENT_LOCAL_IP } from 'react-native-dotenv';

const api = axios.create({
  baseURL: `http://${CURRENT_LOCAL_IP}:3332`,
});

export default api;
