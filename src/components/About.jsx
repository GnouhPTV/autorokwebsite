/* eslint-disable jsx-a11y/alt-text */
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import myImg from "../assets/logo.png";

function About() {
  const { t } = useTranslation();

  return (
    <>
      <img
        className="service-img"
        src={myImg}
        style={{
          visibility: "visible",
          opacity: "1",
          paddingTop: "30px",
        }}
      />
      <div id="introduction">
        <Container
          style={{ border: "3px solid #8b008b", paddingBottom: "15px" }}
        >
          <div className="about-text">
            <h1>{t("About.title")}</h1>
            <ul>
              {t("About.Features", { returnObjects: true }).map(
                (feature, index) => (
                  <li key={index}>{feature}</li>
                )
              )}
            </ul>
          </div>
          <div className="ratio ratio-16x9">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Dn_77i7BL20?si=NFZi3mnOE9mm47cP"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </Container>
      </div>
    </>
  );
}

export default About;
