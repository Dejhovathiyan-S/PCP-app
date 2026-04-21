import axios from 'axios';

const API_URL = 'https://t4e-testserver.onrender.com/api';

export const fetchToken = async (studentId, set, password) => {
  const res = await axios.post(`${API_URL}/public/token`, { studentId, set, password });
  return res.data;
};

export const fetchFitnessData = async (token, endpoint) => {
  const res = await axios.get(`${API_URL}${endpoint}`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return res.data;
};