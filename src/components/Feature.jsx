// Feature.jsx
import React from "react";
import Featurebox from "./Featurebox";
import fimage1 from "../assets/1.svg";
import fimage2 from "../assets/2.svg";
import fimage3 from "../assets/3.svg";
import fimage4 from "../assets/4.svg";
import { useTranslation } from "react-i18next";
import { Container } from "react-bootstrap";

function Feature() {
  const { t } = useTranslation();
  return (
    <div id="features">
      <div style={{ paddingTop: "170px" }} className="a-container">
        <Featurebox
          image={fimage1}
          featureKey="TỰ ĐỘNG THU THẬP ĐÁ QUÝ"
          link="http://web1s.link/uq68fnjeYi"
        />
        <Featurebox
          image={fimage2}
          featureKey="TỰ ĐỘNG THU THẬP RSS"
          link="http://web1s.link/HLxbvg0mre"
        />
        <Featurebox
          image={fimage3}
          featureKey="TỰ ĐỘNG CẤP TƯỚC VỊ"
          link="http://web1s.link/EYlIbWZnCh"
        />
        <Featurebox
          image={fimage4}
          featureKey="DỮ LIỆU VƯƠNG QUỐC"
          link="http://web1s.link/1EY7yaEtM6"
        />
      </div>
    </div>
  );
}

export default Feature;
