import axios from 'axios';

export const signUp = async (formData) => {
  let res = await axios({ method: 'POST', url: '/api/users', data: formData });

  return res;
};

export const login = async (formData) => {
  let res = await axios({ method: 'PUT', url: '/api/auth', data: formData });

  return res;
};
