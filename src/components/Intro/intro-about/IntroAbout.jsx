import React from 'react'
import "../intro-about/IntroAboutC.css"

const IntroAbout = () => {
  return (
    <>
      <div className="about">
        <div className="horizontal-line"></div>

        <h1 style={{ color: "#8b008b" }}> About</h1>
        <div className="horizontal-line"></div>
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
      {/*  */}
      <div id="about-item">
        <div id="about-content">
          <h2>Commitment to safety</h2>
          <p>
            Our team is always active 24/24, always updating tools regularly,
            and the servers are managed by loyal and reputable collaborators,
            ensuring maximum safety for your accounts. Customers trust us.
          </p>
        </div>
      </div>
      {/*  */}
      <div id="about-item-right">
        <div id="about-content-right">
          <h2>Teamwork</h2>
          <p>
            We believe in teamwork and mutual support to achieve common goals.
            Here, every opinion is respected and every member has the
            opportunity to develop themselves.
          </p>
        </div>
      </div>
      {/*  */}
      {/*  */}
      <div id="about-item">
        <div id="about-content">
          <h2>Creativity and Flexibility</h2>
          <p>
            We encourage creativity and flexibility in every aspect. This helps
            us quickly adapt to challenges and come up with unique solutions.
          </p>
        </div>
      </div>
      {/*  */}
      {/*  */}
      <div id="about-item-right">
        <div id="about-content-right">
          <h2>Quality standards</h2>
          <p>
            Quality is our focus. We always do our best to ensure that all
            products and services we provide are stable and most effective. We
            are proud of our passionate team of teammates and are willing to
            cooperate with you to provide the most optimal solutions. Thank you
            for coming to us!
          </p>
        </div>
      </div>
      {/*  */}
    </>
  );
}

export default IntroAbout