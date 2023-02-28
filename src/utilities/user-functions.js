import axios from 'axios';

export const signUp = async (formData) => {
  let res = await axios({ method: 'POST', url: 'http://localhost:5000/api/users', data: formData });

  console.log(res.data.token)

  return res;
};

export const login = async (formData) => {
  let res = await axios({ method: 'PUT', url: 'http://localhost:5000/api/auth', data: formData });

  return res;
};
