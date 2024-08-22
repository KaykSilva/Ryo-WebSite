import React from 'react'
import './enterButton.css'
import { useAuth } from '../../../contexts/authProvider'

const EnterButton = () => {
    const {user, login} = useAuth();

    const handleLogin = async () => {
        try {
          const response = await login();
          console.log("Login feito com sucesso", response);
        } catch (err) {
          console.error("Login error", err);
        }
      };

      if (user) {
        return null;
      }
    
  return (
   <>
    <button 
        className='enterButton'
        onClick={handleLogin}
    >
        Iniciar sessão
    </button>
   </>
  )
}

export default EnterButton