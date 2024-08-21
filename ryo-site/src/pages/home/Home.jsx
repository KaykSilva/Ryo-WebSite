import React from "react";
import "./Home.css";
import ResponsiveAppBar from "../../components/navBar/navBar";
import RyoImage from "../../assets/ryo/RyoImage.png";
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
        <section className="skills"></section>
      </section>
    </div>
  );
};

export default Home;
