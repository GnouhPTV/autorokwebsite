import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  const { t, i18n } = useTranslation();


  const [nav, setNav] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    window.addEventListener("scroll", changeBackground);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", changeBackground);
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  const switchLanguage = (language) => {
    i18n.changeLanguage(language);
    setIsLanguageDropdownOpen(false);
  };
  return (
    <nav className={nav ? "nav active" : "nav"}>
      <Link to="#" className="logo">
        <img src={logo} alt="" />
    <nav className={nav ? "nav active" : "nav"}>
      <Link to="#" className="logo">
        <img src={logo} alt="" />
      </Link>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="nav-icon"></span>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="nav-icon"></span>
      </label>
      <ul className="menu">
      <ul className="menu">
        <li>
          <Link to="/home">{t("Home")}</Link>
          <Link to="/home">{t("Home")}</Link>
        </li>
        <li>
          <Link to="/features-services">{t("features & services")}</Link>
          <Link to="/features-services">{t("features & services")}</Link>
        </li>

        {/*  */}

        <li>
          <Link to="/intro">{t("Introduction")}</Link>
        </li>

        {/* <li>
          <Link to="/contact">{t("contact")}</Link>
        </li> */}

        {/*  */}

        <li>
          <Link to="/other">{t("other")}</Link>
        </li>

        <li>
          <MDBBtn
            outline
            color="light"
            className="m-1"
            color="light"
            className="m-1"
            onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
          >
            <MDBIcon icon="globe" />
            <MDBIcon icon="globe" />
          </MDBBtn>
          {isLanguageDropdownOpen && (
            <ul className="language-dropdown">
            <ul className="language-dropdown">
              <li>
                <MDBBtn
                  outline
                  color="light"
                  className="m-1"
                  onClick={() => switchLanguage("en")}
                  color="light"
                  className="m-1"
                  onClick={() => switchLanguage("en")}
                >
                  Eng
                </MDBBtn>
              </li>
              <li>
                <MDBBtn
                  outline
                  color="light"
                  className="m-1"
                  onClick={() => switchLanguage("vi")}
                  color="light"
                  className="m-1"
                  onClick={() => switchLanguage("vi")}
                >
                  Vie
                </MDBBtn>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
