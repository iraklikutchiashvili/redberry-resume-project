import React from "react";
import Home from "./components/Home";
import Form from "./components/Form";
import { Routes, Route } from "react-router-dom";
import "./app.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
