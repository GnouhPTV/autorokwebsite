import React from "react";
import IntroVideo from "../components/Intro/Intro-video/IntroVideo";
import IntroImage from "../components/Intro/intro-Image/IntroImage";
import IntroAbout from "../components/Intro/intro-about/IntroAbout";

const Intro = () => {
  return (
    <div>
      <IntroImage />
      <IntroVideo />
      <IntroAbout />
    </div>
  );
};

export default Intro;
