import React from "react";
import Header from "./Header";
import Form from "./Form";

function Info() {
  return (
    <div className="main-info">
      <div className="info-left">
        <Header />
        <div className="info-form">
          <Form />
        </div>
      </div>

      <div className="info-right"></div>
    </div>
  );
}

export default Info;
