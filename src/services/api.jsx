import axios from 'axios';

const api = axios.create({
    // baseURL: 'http://localhost:3001',
    baseURL: 'https://project-video-backend.herokuapp.com',
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        "Access-Control-Allow-Methods": "GET, POST, DELETE, HEAD, OPTIONS",
      },
});

export default api;