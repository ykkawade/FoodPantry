import axios from 'axios';
import authHeader from './auth-header';
// To Do if ENV = Dev Or Test
let API_URL = 'http://35.202.47.80:3000/address/';
if (process.env.NODE_ENV === 'development') {
  API_URL = 'http://localhost:3000/address/';
}

export const addAddress = (address: {}) => {
  return axios.post(
    API_URL + 'create',
    { address },
    {
      headers: authHeader(),
    }
  );
};

export const updateAddress = (address: {}) => {
  return axios.post(
    API_URL + 'update',
    { address },
    {
      headers: authHeader(),
    }
  );
};

export const getAddress = () => {
  return axios.get(API_URL + 'get', {
    headers: authHeader(),
  });
};
