import axiosBase from "axios";

// const url = process.env.mode === 'development' ? 'http://localhost:5000/api/' 

const url = 'http://localhost:5000/api/';

const axios = axiosBase.create({
  baseURL: url,
  timeout: 10000,
});


axios.interceptors.request.use(function (config) {
  // config.headers = { .
    // ..config.headers, auth_token: getAuthToken() 
  // };

  console.log('request :) ');
  
  // you can also do other modification in config
  return config;
}, function (error) {
  return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
  console.log('responseeee :) ');
  
  if(response.status === 401) {
      // your failure logic
  }
  return response;
}, function (error) {
  return Promise.reject(error);
});

export default axios;