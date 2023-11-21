import React from 'react';
import facebook from '../assets/facebook.svg';
import zalo from '../assets/zalo.svg';
function Contact() {
  return (
    <div id='contact'>
      <div className='contact-block position-fixed p-2'>
        <a
          href='https://www.facebook.com/autorok2023'
          target='_blank'
          className='d-block text-center'
          rel='noreferrer'
        >
          <img src={facebook} alt='Facebook' />
        </a>
        <a
          href='https://zalo.me/g/dsahny833'
          target='_blank'
          class='d-block text-center mt-2'
          rel='noreferrer'
        >
          <img src={zalo} alt='Zalo' />
        </a>
      </div>
    </div>
  );
}

export default Contact;
