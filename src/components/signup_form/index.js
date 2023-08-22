import React from 'react';
import { useState } from 'react';
import {useAuth} from '../../context/auth/index';
import {useNavigate} from 'react-router-dom';

const SignUp = ({ setNewUser }) => {
  const nav = useNavigate();
  const { signUp } = useAuth();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const handleClick = () => {
    setNewUser(false);
  };

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const {password, password2} = formData;
  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      console.log('Passwords do no match');
    } else {
      await signUp(formData);
      nav('/dashboard');
    }
  
  }

  

  return (
    <div className='forms'>
      <h2>SignUp</h2>
      <form
        autoComplete='off'
        onSubmit={(e) => {
          onSubmit(e);
        }}
      >
        <label htmlFor='name1'>Name: </label>
        <input
          type='text'
          id='name1'
          name='name'
          onChange={(e) => {
            onChange(e);
          }}
          placeholder='First and Last Name'
        />
        <label htmlFor='email1'>Email: </label>
        <input
          type='email'
          id='email1'
          name='email'
          onChange={(e) => {
            onChange(e);
          }}
          placeholder='Email'
        />
        <label htmlFor='password1'>Password: </label>
        <input
          type='password'
          id='password1'
          name='password'
          onChange={(e) => {
            onChange(e);
          }}
          placeholder='Password'
          minLength='6'
        />
        <input
          type='password'
          id='password2'
          name='password2'
          onChange={(e) => {
            onChange(e);
          }}
          placeholder='Confirm Password'
          minLength='6'
        />
        <button type='submit'>Sign Up</button>
      </form>
      <p>
        Already have an account? <button onClick={handleClick}>Sign In</button>
      </p>
    </div>
  );
};

export default SignUp;