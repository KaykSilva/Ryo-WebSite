import React from "react";
import Navbar from "../../components/navBar/navBar";
import LoginButton from "../../components/login/loginButton";
import { useAuth } from "../../contexts/authProvider";
import "./daily.css";
import GetDaily from "../../components/getDaily/daily";

const Daily = () => {
  const { user } = useAuth(); // Obtém o estado de autenticação do usuário
  
  return (
    <>
      
      <nav>
        <Navbar />
      </nav>
      <div className="daily-container">
        <div className="daily-button">
          <LoginButton />
          {user && (
            <GetDaily/>
          )}
        </div>
      </div>
    </>
  );
};

export default Daily;
