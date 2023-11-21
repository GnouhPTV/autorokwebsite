/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link, animateScroll as scroll } from 'react-scroll';
import React from 'react';

function Header() {
  const scrollToFeatures = () => {
    scroll.scrollTo('features', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };
  return (
    <div id='main'>
      <div className='name'>
        <h2 style={{ color: 'white' }}>START YOUR FREE TRIAL</h2>
        <h1>
          <span>AUTO</span>ROK BOT
        </h1>
        <p className='details'>
          Experiment with our automated bot and discover more new functions
        </p>
        <div className='header-btns'>
          <Link
            to='features'
            spy={true}
            smooth={true}
            duration={800}
            className='header-btn'
            onClick={scrollToFeatures}
          >
            JOIN US
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
