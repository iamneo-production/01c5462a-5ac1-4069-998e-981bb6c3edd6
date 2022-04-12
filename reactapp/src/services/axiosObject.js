import { isJwtExpired } from 'jwt-check-expiration';
const base_url = "http://localhost:8082";
const axios = require('axios').default;

// axois object
const axiosObject = axios.create({
  baseURL: base_url,
  timeout: 1500, 
});



axiosObject.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    const token = localStorage.getItem('id_token');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      if (isJwtExpired(token)) {
        alert("Session expired");
        window.location.replace("/Login");
      }
    }
    else {
      alert("error");
      window.location.replace("/Login");
    }
    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  });

export default axiosObject;