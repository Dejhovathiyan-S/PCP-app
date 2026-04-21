import axios from 'axios';

const BASE_URL = 'https://t4e-testserver.onrender.com/api';

const STUDENT_ID = "e0323042";
const PASSWORD = "572981";
const SET = "B";

export const getTokenInfo = async () => {
  const response = await axios.post(`${BASE_URL}/public/token`, {
    studentId: STUDENT_ID,
    password: PASSWORD,
    set: SET
  });
  return response.data;
};

export const getMovies = async (token, dataUrl) => {
  const response = await axios.get(`${BASE_URL}${dataUrl}`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return response.data;
};