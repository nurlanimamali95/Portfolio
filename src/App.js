import React from "react";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="font-rubik text-buttery ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
