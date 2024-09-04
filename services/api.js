import axios from 'axios';

const API_URL = "http://192.168.239.14:5000";

export const loginUser = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { username, password });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};