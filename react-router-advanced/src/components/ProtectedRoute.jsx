// src/components/ProtectedRoute.jsx
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

// Simulate an authentication check (you can replace this with actual auth logic)
const isAuthenticated = false;  // Change this based on authentication state

function ProtectedRoute() {
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}

export default ProtectedRoute;
