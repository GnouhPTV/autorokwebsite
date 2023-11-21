import React from 'react';
import Featurebox from './Featurebox';
import fimage1 from '../assets/1.svg';
import fimage2 from '../assets/2.svg';
import fimage3 from '../assets/3.svg';
import fimage4 from '../assets/4.svg';

function Feature() {
  return (
    <div id='features'>
      <h1>FEATURES</h1>
      <div className='a-container'>
        <Featurebox
          image={fimage1}
          title='AUTO GEMS GATHERING'
          button='Dowload'
          link='http://web1s.link/uq68fnjeYi'
        />
        <Featurebox
          image={fimage2}
          title='AUTO RSS GATHERING'
          button='Dowload'
          link='http://web1s.link/HLxbvg0mre'
        />
        <Featurebox
          image={fimage3}
          title='AUTO TITLES GRANTING'
          button='Dowload'
          link='http://web1s.link/EYlIbWZnCh'
        />
        <Featurebox
          image={fimage4}
          title='KINGDOM DATA ANALYSIS'
          button='Download'
          link='http://web1s.link/1EY7yaEtM6'
        />
      </div>
    </div>
  );
}

export default Feature;
