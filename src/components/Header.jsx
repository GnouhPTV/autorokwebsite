/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link, animateScroll as scroll } from 'react-scroll';
import React from 'react';
import { useTranslation } from 'react-i18next';

function Header() {
  const { t } = useTranslation(); // Initialize useTranslation

  const scrollToFeatures = () => {
    scroll.scrollTo('features', {
      duration: 300,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };

  return (
    <div id='main'>
      <div className='name'>
        <h2 style={{ color: 'white' }}>{t('Header.freeTrial')}</h2>
        <h1>
          <span>{t('Header.autoRokBot')}</span>
        </h1>
        <p className='details'>{t('Header.experimentText')}</p>
        <div className='header-btns'>
          <Link
            to='features'
            spy={true}
            smooth={true}
            duration={300}
            className='header-btn'
            onClick={scrollToFeatures}
          >
            {t('Header.joinUs')}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
