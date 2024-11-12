import { jwtDecode } from 'jwt-decode';
import api from '../../api';
import React, { useState, useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const [isAuthorized, setIsAuthorized] = useState(null);
  const location = useLocation();

  useEffect(() => {
    auth().catch(() => setIsAuthorized(false));
  }, []);

  async function refreshToken() {
    const refreshToken = localStorage.getItem("refresh");
    try {
      const res = await api.post("/token/refresh/", { refresh: refreshToken });
      if (res.status === 200) {
        localStorage.setItem("access", res.data.access);
        setIsAuthorized(true);
      } else {
        setIsAuthorized(false);
      }
    } catch (error) {
      setIsAuthorized(false); // Ensure unauthorized state if refresh fails
    }
  }

  async function auth() {
    const token = localStorage.getItem("access");
    if (!token) {
      setIsAuthorized(false);
      return;
    }

    const decoded = jwtDecode(token);
    const expiry_date = decoded.exp;
    const current_time = Date.now() / 1000;

    if (current_time > expiry_date) {
      await refreshToken();
    } else {
      setIsAuthorized(true);
    }
  }

  if (isAuthorized === null) {
    // You can return a spinner or loading state if needed
    return <div>Loading...</div>;
  }

  return (
    isAuthorized ? children : <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default ProtectedRoute;