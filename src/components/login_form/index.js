import React from "react";
import { useState } from "react";
import { useAuth } from "../../context/auth";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ setNewUser }) => {
  const nav = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleClick = () => {
    setNewUser(true);
  };
  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await login(formData);
    console.log('Success');
    nav('/dashboard');
  };
  
  return (
    <div className="forms">
      <h2>Login</h2>
      <form autoComplete="off" onSubmit={(e) => {
          onSubmit(e);
        }} > 
        <label htmlFor="email">Email: </label>
        <input type="email" id="email" name="email" placeholder="Email" 
          onChange={(e)=>{
            onChange(e)
          }}
        />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          minLength="6"
          onChange={(e)=>{
            onChange(e)
          }}
        />
        <button type="submit">Log In</button>
      </form>
      <p>
        Dont have an account? <button onClick={handleClick}>Sign Up</button>
      </p>
    </div>
  );
};

export default LoginForm;
