import axios from 'axios';

const BASE_URL = 'https://t4e-testserver.onrender.com/api';

export const getTokenInfo = async (studentId, set) => {
const response = await axios.post(`${BASE_URL}/public/token`, {
    studentId: 'e0323042',
    password: '572981',
    set: 'B'
});
  return response.data;
};

export const getMovies = async (token, dataUrl) => {
  const response = await axios.get(`${BASE_URL}${dataUrl}`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return response.data;
};