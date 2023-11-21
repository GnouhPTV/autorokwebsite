import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { Link, animateScroll as scroll } from 'react-scroll';

function Navbar() {
  const scrollToFeatures = () => {
    scroll.scrollTo('features', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };
  const [nav, setNav] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNav(true);
    } else {
      setNav(false);
    }
  };
  window.addEventListener('scroll', changeBackground);

  return (
    <nav className={nav ? 'nav active' : 'nav'}>
      <Link to='#' className='logo'>
        <img src={logo} alt='' />
      </Link>
      <input className='menu-btn' type='checkbox' id='menu-btn' />
      <label className='menu-icon' for='menu-btn'>
        <span className='nav-icon'></span>
      </label>
      <ul className='menu'>
        <li>
          <Link
            to='header'
            spy={true}
            smooth={true}
            duration={800}
            onClick={scrollToFeatures}
          >
            Header
          </Link>
        </li>
        <li>
          <Link
            to='features'
            spy={true}
            smooth={true}
            duration={800}
            onClick={scrollToFeatures}
          >
            Feature
          </Link>
        </li>

        <li>
          <Link
            to='about'
            spy={true}
            smooth={true}
            duration={800}
            onClick={scrollToFeatures}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to='commit'
            spy={true}
            smooth={true}
            duration={800}
            onClick={scrollToFeatures}
          >
            Our Commitment
          </Link>
        </li>
        <li>
          <Link
            to='feedback'
            spy={true}
            smooth={true}
            duration={800}
            onClick={scrollToFeatures}
          >
            Feedback
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
