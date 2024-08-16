// AuthCallback.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const accessToken = urlParams.get('access_token');

    if (accessToken) {
      localStorage.setItem('accessToken', accessToken);
      navigate('/');
    }
  }, [navigate]);

  return <div>Autenticando...</div>;
};

export default AuthCallback;
