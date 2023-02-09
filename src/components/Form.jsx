import React, { useState } from "react";
import Header from "./Header";
import Personal from "./Personal";
import Education from "./Education";
import Experience from "./Experience";
import Home from "./Home";

function Form() {
  const [page, setPage] = useState(0);
  const formTitles = ["პირადი ინფო", "გამოცდილება", "განათლება"];

  function DisplayPage() {
    switch (page) {
      case 0:
        return <Personal currentPage={page} setPage={setPage} />;
      case 1:
        return <Experience currentPage={page} setPage={setPage} />;
      case 2:
        return <Education />;
    }
  }

  return (
    <div className="main-info">
      <div className="info-left">
        <Header title={formTitles[page]} page={page} setPage={setPage} />
        <div className="info-form">{DisplayPage()}</div>
      </div>
      <div className="info-right"></div>
    </div>
  );
}

export default Form;
