import React from 'react';

function Featurebox(props) {
  return (
    <div className='a-box'>
      <div className='a-b-img'>
        <img src={props.image} alt='' />
      </div>
      <div className='a-b-text'>
        <h2> {props.title} </h2>
        <a
          href={props.link}
          className='btn btn-primary mt-3 mb-3'
          target='_blank'
          rel='noopener noreferrer'
        >
          {props.button}
        </a>
      </div>
    </div>
  );
}

export default Featurebox;
