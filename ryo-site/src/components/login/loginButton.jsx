import React from "react";
import "./loginButton.css";
import { FaDiscord } from "react-icons/fa";
import { useAuth } from "../../contexts/authProvider";

const LoginButton = () => {
  const { login, user } = useAuth();

  const handleLogin = async () => {
    try {
      const response = await login();
      console.log("Login feito com sucesso", response);
    } catch (err) {
      console.error("Login error", err);
    }
  };

  // Retorna null se user for falso
  if (user) {
    return null;
  }

  return (
    <>
      <div className="button-login-container">
        <div className="title">
          <h1>Recompensa diária.</h1>
          <span className="span-login">
            Você precisa logar com sua conta do discord para receber sua
            recompensa
          </span>
        </div>
      </div>

      <div className="button-area">
        <button
          onClick={handleLogin}
          className="login-button"
          aria-label="Entrar com Discord"
        >
          <FaDiscord className="dcbutton" size={20} />
          Entrar com Discord
        </button>
      </div>
    </>
  );
};

export default LoginButton;
