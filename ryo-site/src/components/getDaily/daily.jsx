import React, { useState } from "react";
import "./getDaily.css";
import vibrando from "../../assets/gifs/vibrando.gif";
import pouso from "../../assets/gifs/pouso.gif";

const GetDaily = () => {
  const [showCounter, setShowCounter] = useState(false);
  const [hideCounter, setHideCounter] = useState(true);
  const generateRandomNumber = () => {
    return Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;
  };

  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());

  const handleButtonClick = () => {
    setRandomNumber(generateRandomNumber());
    setShowCounter(true);
    setHideCounter(false);
  };

  return (
    <>
      <div className="button-getDaily-container">
        {hideCounter && (
          <div className="daily-title">
            <div className="gif-area">
              <img src={vibrando} alt="Imagem de gato" />
            </div>
            <h1>Recompensa diária.</h1>
            <span>Tem uma recompensa esperando por você!!</span>
          </div>
        )}

        {showCounter && (
          <div className="daily-title">
            <div className="gif-area">
              <img src={pouso} alt="Imagem de gato" />
            </div>
            <h1>Recompensa diária.</h1>
            <span>
              Você ganhou{" "}
              <span className="highlight-number"> {randomNumber} </span>{" "}
              RyoCoins!!
            </span>
          </div>
        )}
      </div>

      <div className="daily-button-area">
        <button
          className="getDaily-button"
          aria-label="Resgatar"
          onClick={handleButtonClick}
        >
          Resgatar
        </button>
      </div>
    </>
  );
};

export default GetDaily;
