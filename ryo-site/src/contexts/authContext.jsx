import React, { createContext, useEffect, useState } from "react";
import getUser from "../api/get/getUSer.js";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = () => {
    const url = `http://217.196.61.91:3000/auth/discord`;
    window.location.href = url;
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await getUser();
        const accessToken = localStorage.getItem('accessToken');

        if (accessToken) {
          setUser(true);
          localStorage.setItem('userInfo', JSON.stringify(response));
        } else {
          setUser(false);
        }
      } catch (err) {
        console.error("Erro ao obter usuário", err);
        setUser(null);
      }
    };

    fetchUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
