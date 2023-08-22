import React from 'react';
import { Outlet } from 'react-router-dom';
import { useAuth } from '../../context/auth';

const ProtectedRoutes = () => {
  // Import cookies from context
  const { cookies } = useAuth();

  // If a token saved in cookies redirect to protected route, otherwise say not authorized
  return cookies.token ? (
    <Outlet />
  ) : (
    <h1>You are not authorized to view this page!!!!!</h1>
  );
};

export default ProtectedRoutes;