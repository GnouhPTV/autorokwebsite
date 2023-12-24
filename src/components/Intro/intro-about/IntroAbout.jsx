import React from 'react'
import "../intro-about/IntroAboutC.css"
import { Container } from 'react-bootstrap';

const IntroAbout = () => {
  return (
    <>
      <div className="about">
        <h1> About</h1>
      </div>

      <div id="about-item">
        <div id="about-content">
          <h2>Mission</h2>
          <p>
            We want to develop and bring products to the world so that everyone
            can access the benefits of our tools. Thereby making people less
            bored when playing the game because now the difference between the
            boss and us is getting closer and closer. To sum up, the advent of
            automation is a positive thing for everyone (including game
            publishers and game players).
          </p>
        </div>
      </div>
      {/*  */}
      <div id="about-item-right">
        <div id="about-content-right">
          <h2>Diversity and Professionalism</h2>
          <p>
            We have a team of extremely dynamic and knowledgeable collaborators
            about games, so most of us can meet all the requirements that
            customers set out.
          </p>
        </div>
      </div>
    </>
  );
}

export default IntroAbout