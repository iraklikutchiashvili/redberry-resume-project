import React, { useState } from "react";
import Header from "./Header";
import Personal from "./Personal";
import Education from "./Education";
import Experience from "./Experience";
import Home from "./Home";

function Form() {
  const [page, setPage] = useState(0);
  const formTitles = ["პირადი ინფო", "გამოცდილება", "განათლება"];

  const [data, setData] = useState({
    name: "",
    surname: "",
    email: "",
    phone_number: "",
    experiences: [
      {
        position: "",
        employer: "",
        start_date: "",
        due_date: "",
        description: "",
      },
    ],
    educations: [
      {
        institute: "",
        degree: "",
        due_date: "",
        description: "",
      },
    ],
    image: "",
    about_me: "",
  });

  function handlePersonalChange(event) {
    setData((prevValues) => {
      return {
        ...prevValues,
        [event.target.name]: event.target.value,
      };
    });
  }

  function handleFile(event) {
    setData((prevValues) => {
      return {
        ...prevValues,
        [event.target.name]: event.target.files[0],
      };
    });
  }

  function DisplayPage() {
    switch (page) {
      case 0:
        return (
          <Personal
            handleChange={handlePersonalChange}
            handleFile={handleFile}
            data={data}
            setPersonalData={setData}
            currentPage={page}
            setPage={setPage}
          />
        );
      case 1:
        return <Experience currentPage={page} setPage={setPage} />;
      case 2:
        return <Education />;
    }
  }

  return (
    <div className="main-info">
      <div className="info-left">
        <Header title={formTitles[page]} page={page} />
        <div className="info-form">{DisplayPage()}</div>
      </div>
      <div className="info-right"></div>
    </div>
  );
}

export default Form;
