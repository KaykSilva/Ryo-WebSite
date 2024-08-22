import React from "react";
import "./AddButtons.css";
import { MdOutlineAddToPhotos } from "react-icons/md";
import { LuLayoutPanelTop } from "react-icons/lu";
import { TbDoorEnter } from "react-icons/tb";

const AddButtons = () => {
  const handleAddToServer = () => {
    const url =
      "https://discord.com/oauth2/authorize?client_id=1242571334203211897";
    window.location.href = url;
  };
  const handleEnterToServer = () => {
    const url =
      "https://discord.gg/dAXKWdPnnh";
    window.location.href = url;
  };



  return (
    <div className="addBot-container">
      <div className="buttons-add">
        
      </div>
      <button
        className="addServer-btn"
        aria-label="Entrar com Discord"
        onClick={handleAddToServer}
      >
        <MdOutlineAddToPhotos className="dcbutton" size={20} />
        Adicione ao seu servidor
      </button>

      <button
       className="manageServer-btn"
        aria-label="Entrar com Discord"
      >
        <LuLayoutPanelTop className="dcbutton" size={20} />
        Gerenciar Servidores
      </button>


      <button
        className="addServer-btn"
        aria-label="Entrar com Discord"
        onClick={handleEnterToServer}
      >
        <TbDoorEnter  className="dcbutton" size={20} />
        junte-se ao nosso servidor!
      </button>

      
    </div>
  );
};

export default AddButtons;
