import React from "react";
import { Route, Routes } from "react-router-dom";
import Intro from "../Page/Intro";
import Other from "../Page/Other";
import SerFe from "../Page/SerFe";
import Header from "../components/Header";
import OtherNews from "../components/Other/other-News/OtherNews";
import Policy from "../components/Other/Policy/Policy";
import Promotion from "../components/Other/sales/Promotion";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />} />

      <Route path="/home" element={<Header />} />
      <Route path="/features-services" element={<SerFe />} />
      <Route path="/intro" element={<Intro />} />
      {/* <Route path="/contact" element={<Contact />} /> */}
      <Route path="/other" element={<Other />} />
      <Route path="/other-new" element={<OtherNews />} />
      <Route path="/promotion" element={<Promotion />} />
      <Route path="/policy" element={<Policy />} />
    </Routes>
  );
};

export default Routers;
