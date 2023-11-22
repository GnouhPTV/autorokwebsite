import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import { Link, animateScroll as scroll } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import { MDBBtn, MDBIcon, MDBCollapse } from 'mdb-react-ui-kit';

function Navbar() {
  const { t, i18n } = useTranslation();
  const scrollToFeatures = () => {
    scroll.scrollTo('features', {
      duration: 300,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };
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
    window.addEventListener('scroll', changeBackground);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, []);

  const switchLanguage = (language) => {
    i18n.changeLanguage(language);
    setIsLanguageDropdownOpen(false);
  };
  return (
    <nav className={nav ? 'nav active' : 'nav'}>
      <Link to='#' className='logo'>
        <img src={logo} alt='' />
      </Link>
      <input className='menu-btn' type='checkbox' id='menu-btn' />
      <label className='menu-icon' htmlFor='menu-btn'>
        <span className='nav-icon'></span>
      </label>
      <ul className='menu'>
        <li>
          <Link
            to='header'
            spy={true}
            smooth={true}
            duration={300}
            onClick={scrollToFeatures}
          >
            {t('header')}
          </Link>
        </li>
        <li>
          <Link
            to='features'
            spy={true}
            smooth={true}
            duration={300}
            onClick={scrollToFeatures}
          >
            {t('feature')}
          </Link>
        </li>
        <li>
          <Link
            to='about'
            spy={true}
            smooth={true}
            duration={300}
            onClick={scrollToFeatures}
          >
            {t('about')}
          </Link>
        </li>
        <li>
          <Link
            to='commit'
            spy={true}
            smooth={true}
            duration={300}
            onClick={scrollToFeatures}
          >
            {t('commitment')}
          </Link>
        </li>
        <li>
          <Link
            to='feedback'
            spy={true}
            smooth={true}
            duration={300}
            onClick={scrollToFeatures}
          >
            {t('feedback')}
          </Link>
        </li>
        <li>
          <MDBBtn
            outline
            color='light'
            className='m-1'
            onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
          >
            <MDBIcon icon='globe' />
          </MDBBtn>
          {isLanguageDropdownOpen && (
            <ul className='language-dropdown'>
              <li>
                <MDBBtn
                  outline
                  color='light'
                  className='m-1'
                  onClick={() => switchLanguage('en')}
                >
                  Eng
                </MDBBtn>
              </li>
              <li>
                <MDBBtn
                  outline
                  color='light'
                  className='m-1'
                  onClick={() => switchLanguage('vi')}
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
