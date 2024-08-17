import React, { useState } from "react";
import "./getDaily.css";
import vibrando from "../../assets/gifs/vibrando.gif";
import pouso from "../../assets/gifs/pouso.gif";
import getDaily from "../../api/post/getDaily";

const GetDaily = () => {
  const generateRandomNumber = () => {
    return Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;
  };

  const [showCounter, setShowCounter] = useState(false);
  const [hideCounter, setHideCounter] = useState(true);
  const [message, setMessage] = useState(
    "Tem uma recompensa esperando por você!!"
  );
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());
  const [gifStatus, setGifStatus] = useState(vibrando);

  const handleButtonClick = async () => {
    setRandomNumber(generateRandomNumber());
    setShowCounter(true);
    setHideCounter(false);
    await handleGetDaily();
  };

  const handleGetDaily = async () => {
    const userInfo = localStorage.getItem(userInfo);
    const discordId = userInfo.id
    const forms = {
      amount: randomNumber,
    };

    try {
      const response = await getDaily(discordId, forms);
      console.log("resposta", response.status);

      if (response.status === 200) {
        setMessage(`Você ganhou ${response.data.balance} RyoCoins!`);
        setGifStatus(pouso);
      } else if (response.status === 201) {
        setMessage("Você já resgatou sua recompensa diária.");
        setGifStatus(vibrando);
      } else {
        setMessage("Erro ao resgatar a recompensa.");
      }
    } catch (error) {
      console.error("Erro ao resgatar a recompensa:", error);
      setMessage("Erro ao resgatar a recompensa.");
    }
  };

  return (
    <>
      <div className="button-getDaily-container">
        <div className="daily-title">
          <div className="gif-area">
            <img src={gifStatus} alt="Imagem de gato" />
          </div>
          <h1>Recompensa diária.</h1>
          <span className="highlight-number">{message}</span>
        </div>
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
