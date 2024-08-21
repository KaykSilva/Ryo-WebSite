import React from "react";
import "./Home.css";
import ResponsiveAppBar from "../../components/navBar/navBar";
import RyoImage from "../../assets/ryo/RyoImage.png";
import AddBot from "../../components/buttons/AddButtons";
import AddButtons from "../../components/buttons/AddButtons";
const Home = () => {
  return (
    <div className="home-container">
      <nav>
        <ResponsiveAppBar />
      </nav>

      <section className="introduction">
        <div className="ryo-image">
          <img
            src={RyoImage}
            alt="source: https://www.deviantart.com/apriononurhakim/art/Yamada-Ryou-1017853343"
          />
        </div>
        <div className="add-btns">
          <h1>Adicione ao seu servidor</h1>
          <AddButtons />
        </div>
      </section>
      <section className="skills"></section>
    </div>
  );
};

export default Home;
