import React from "react";
import { useAuth } from "./auth.js";
import { Navigate } from "react-router-dom";
export const RequireAuthentication = ({ children }) => {
  const auth = useAuth();
  if (!auth.userId && !auth.userName && !auth.userEmailId && !auth.userRole) {
    return <Navigate to="/" />;
  }
  return children;
};
