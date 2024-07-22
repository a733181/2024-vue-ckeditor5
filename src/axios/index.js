import axios from 'axios';

const location = window.location.origin;

export const api = axios.create({
  headers: {
    // 設定預設的 Content-Type 為 JSON
    'Content-Type': 'application/json',
  },
  baseURL: location,
});

// api.interceptors.response.use(
//   (res) => {
//     return res;
//   },
//   (error) => {
//     console.error(error);
//     return Promise.reject(error);
//   },
// );