// Feature.jsx
import React from 'react';
import Featurebox from './Featurebox';
import fimage1 from '../assets/1.svg';
import fimage2 from '../assets/2.svg';
import fimage3 from '../assets/3.svg';
import fimage4 from '../assets/4.svg';
import { useTranslation } from 'react-i18next';

function Feature() {
  const { t } = useTranslation();
  return (
    <div id='features'>
      <h1>{t(`features.Feature`)}</h1>
      <div className='a-container'>
        <Featurebox
          image={fimage1}
          featureKey='autoGems'
          link='http://web1s.link/uq68fnjeYi'
        />
        <Featurebox
          image={fimage2}
          featureKey='autoRss'
          link='http://web1s.link/HLxbvg0mre'
        />
        <Featurebox
          image={fimage3}
          featureKey='autoTitles'
          link='http://web1s.link/EYlIbWZnCh'
        />
        <Featurebox
          image={fimage4}
          featureKey='dataAnalysis'
          link='http://web1s.link/1EY7yaEtM6'
        />
      </div>
    </div>
  );
}

export default Feature;
