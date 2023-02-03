import React from "react";
import homeimg from "../images/homeimg.png";
import logoredberry from "../images/logoredberry.png";
import logo2 from "../images/logo2.png";

const Home = () => {
  return (
    <div className="home">
      <img className="logo" src={logoredberry} alt="logo" />
      <div className="line"> </div>
      <img className="center-logo" src={logo2} alt="logocenter" />
      <div className="addresumebtn">
        <a href="/info">რეზიუმეს დამატება</a>
      </div>
      <img className="backgroundimg" src={homeimg} alt="backgroundimg" />
    </div>
  );
};

export default Home;
