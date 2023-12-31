import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { MDBFooter, MDBContainer, MDBIcon } from "mdb-react-ui-kit";


function Navbar() {
  const { t, i18n } = useTranslation();

  const [nav, setNav] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [isOtherDropdownOpen, setIsOtherDropdownOpen] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  const switchLanguage = (language) => {
    i18n.changeLanguage(language);
    setIsLanguageDropdownOpen(false);
  };

  return (
    <nav className={nav ? "nav active" : "nav"}>
      <Link to="/" className="logo ">
        <img src={logo} alt="" className="logo-img" />
      </Link>

      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="nav-icon"></span>
      </label>
      {/*  */}
      <ul className="menu m-2">
        <li>
          <Link to="/home">{t("Home")}</Link>
        </li>
        <li>
          <Link to="/features-services">{t("features & services")}</Link>
        </li>

        {/*  */}

        <li>
          <Link to="/intro">{t("Introduction")}</Link>
        </li>
        {/*  */}
        <li className="dropdown-wrapper">
          <div className="other-link">
            <Link>
              {t("other")}{" "}
              <MDBIcon icon="chevron-down" className="dropdown-icon" />{" "}
            </Link>
          </div>
          <div className="dropdown-content">
            <Link to="/other-new">{t("News")}</Link>
            <Link to="/policy">{t("Policy")}</Link>

            <Link to="/promotion">{t("Promotion")}</Link>
          </div>
        </li>

        {/* <li>
          <MDBBtn
            outline
            className="m-1"
            color="light"
            onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
          >
            <MDBIcon icon="globe" />
          </MDBBtn>
          {isLanguageDropdownOpen && (
            <ul className="language-dropdown">
              <li>
                <MDBBtn
                  outline
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
                >
                  Vie
                </MDBBtn>
              </li>
            </ul>
          )}
        </li> */}
      </ul>
    </nav>
  );
}

export default Navbar;
