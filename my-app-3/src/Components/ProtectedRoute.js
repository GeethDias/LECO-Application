import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ user, requiredRole, children }) => {
  // If the user is not logged in, redirect to the login page
  if (!user) {
    return <Navigate to="/login" />;
  }

  // If the user is logged in but does not have the required role, redirect to Not Authorized
  if (user.role !== requiredRole) {
    return <Navigate to="/not-authorized" />;
  }

  // If the user is logged in and has the required role, render the protected component
  return children;
};

export default ProtectedRoute;
