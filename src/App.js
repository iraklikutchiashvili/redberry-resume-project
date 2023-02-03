import React from "react";
import Home from "./components/Home";
import Info from "./components/Info";
import Experience from "./components/Experience";
import Edu from "./components/Edu";
import Resume from "./components/Resume";
import "./app.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Info />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/edu" element={<Edu />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </div>
  );
}

export default App;
