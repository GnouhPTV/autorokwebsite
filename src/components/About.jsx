import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

function About() {
  return (
    <div id='about'>
      <Container style={{ border: '3px solid #8b008b', paddingBottom: '15px' }}>
        <div className='about-text'>
          <h1>ABOUT BOT</h1>
          <p>
            - Automatically march troops to gather gems on the map.
            <br />
            - The amount of gems gathered is about 5.000-12.000 every day.
            <br />
            - Multi-character support, the system will automatically switch to
            other characters to gather resources after main character is free.
            <br />
            - Automatically manage city including: harvesting resources, buying
            items in courier station, contributing technology,...
            <br />
            - Automatically solve captcha when it is detected.
            <br />
            - Automatically reload on error so it can work 24/7.
            <br />
          </p>
        </div>
        <div className='ratio ratio-16x9'>
          <iframe
            width='560'
            height='315'
            src='https://www.youtube.com/embed/Dn_77i7BL20?si=NFZi3mnOE9mm47cP'
            title='YouTube video player'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowfullscreen
          ></iframe>
        </div>
      </Container>
    </div>
  );
}

export default About;
