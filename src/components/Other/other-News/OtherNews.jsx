import React from "react";
import "./OtherNewsC.css";
import Merry from "../../../assets/Merry.jpg";
import Rise from "../../../assets/riserise.jpg";


const OtherNews = () => {
  return (
    <div className="News">
      <div className="title-News">
        <h3>News</h3>
      </div>
      {/*  */}
      <div className="news-list">
        <div className="news-items  ">
          <div className="news-card  mb-4 gap-4">
            <img
              src={Merry}
              style={{
                borderRadius: "15px",
                width: "300px",
                height: "250px",
                objectFit: "cover",
              }}
              alt=""
            />
            <div>
              <h2 style={{ fontWeight: "900", color: "#8b008b" }}>
                Merry Christmas
              </h2>
              <p>
                Governors, may this Christmas be a time of togetherness, 
                laughter, and creating beautiful memories that will be treasured
                for a lifetime. Wishing you all a truly magical holiday season!{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*  */}

      {/*  */}
      <div className="news-list">
        <div className="news-items  mb-5">
          <div className="news-card  mb-4 gap-4">
            <img
              src={Rise}
              style={{
                borderRadius: "15px",
                width: "300px",
                height: "250px",
                objectFit: "cover",
              }}
              alt=""
            />
            <div>
              <h2 style={{ fontWeight: "900",color: "#8b008b" }}>
                Join our Rise of Kingdoms Community in Spanish!
              </h2>
              <p>
                Are you a fan of Rise of Kingdoms? Discover a space dedicated to
                strategy, learning and camaraderie in our Spanish-speaking
                community.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*  */}

      {/*  */}
    </div>
  );
};

export default OtherNews;
