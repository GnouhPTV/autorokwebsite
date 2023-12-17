import React from "react";
import { Route, Routes } from "react-router-dom";
import SerFe from "../Page/SerFe";
import Header from "../components/Header";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />} />

      <Route path="/home" element={<Header />} />
      <Route path="/features-services" element={<SerFe />} />
    </Routes>
  );
};

export default Routers;
