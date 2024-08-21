import React from 'react'
import './AddButtons.css'
import { MdOutlineAddToPhotos } from "react-icons/md";
import { LuLayoutPanelTop } from "react-icons/lu";

const AddButtons = () => {
  return (
    <div className="addBot-container">
        <button
          className="addServer-btn"
          aria-label="Entrar com Discord"
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
    </div>
  )
}

export default AddButtons