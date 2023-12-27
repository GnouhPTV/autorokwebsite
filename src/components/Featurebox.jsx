import React from 'react';
import { useTranslation } from 'react-i18next';

function Featurebox(props) {
  const { t } = useTranslation();

  return (
    <div className='a-box'>
      <div className='a-b-img'>
        <img src={props.image} alt='' />
      </div>
      <div className='a-b-text'>
        <h2>{t(`${props.featureKey}`)}</h2>
        <a
          href={props.link}
          className='btn btn-primary mt-3 mb-3'
          target='_blank'
          rel='noopener noreferrer'
        >
          DOWNLOAD
        </a>
      </div>
    </div>
  );
}

export default Featurebox;
