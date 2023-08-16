import axios from 'axios';
import authHeader from './auth-header';
// To Do if ENV = Dev Or Test
let API_URL = 'http://35.202.47.80:3000/courier/';
if (process.env.NODE_ENV === 'development') {
  API_URL = 'http://localhost:3000/courier/';
}

export const addCourier = (courier: {}) => {
  return axios.post(
    API_URL + 'create',
    { courier },
    {
      headers: authHeader(),
    }
  );
};

export const updateCourier = (courier: {}) => {
  return axios.post(
    API_URL + 'update',
    { courier },
    {
      headers: authHeader(),
    }
  );
};

export const getCourier = () => {
  return axios.get(API_URL + 'get', {
    headers: authHeader(),
  });
};
