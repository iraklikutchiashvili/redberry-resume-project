import React from "react";
import vector from "../images/vector.png";

function Header(props) {
  return (
    <div className="info-box">
      <a href="/">
        <div className="back-btn">
          <img src={vector} alt="backvector" />
        </div>
      </a>

      <div className="info-header">
        <h1>{props.title}</h1>
        <p>{props.page + 1}/3</p>
      </div>
    </div>
  );
}

export default Header;
