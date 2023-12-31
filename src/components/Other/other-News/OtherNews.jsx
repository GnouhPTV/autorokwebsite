import React from "react";
import { Container } from "react-bootstrap";
import "./OtherNewsC.css";

const OtherNews = () => {
  const news = [
    {
      img: require("../../../assets/Merry.jpg"),
      title: "Merry Christmas",
      content:
        "Governors, may this Christmas be a time of togetherness,laughter, and creating beautiful memories that will betreasured for a lifetime. Wishing you all a truly magicalholiday season!",
    },
    {
      img: require("../../../assets/riserise.jpg"),
      title: "Join our Rise of Kingdoms Community in Spanish!",
      content:
        "Governors, may this Christmas be a time of togetherness, laughter, and creating beautiful memories that will be treasured for a lifetime. Wishing you all a truly magical holiday season!",
    },
  ];

  return (
    <div id="News">
      <Container>
        <div className="title">
          <h3>News</h3>
        </div>
        {/*  */}
        {news.map((items, index) => (
          <div className="news-list">
            <div className="news-items  ">
              <div className="news-card mt-2 mb-3 gap-4">
                <div className="image-container">
                  <img
                    src={items.img}
                    style={{
                      borderRadius: "15px",
                      width: "300px",
                      height: "200px",
                      objectFit: "cover",
                      transition: "transform 0.5s ease-in-out",
                    }}
                    alt=""
                    className="hover-zoom"
                  />
                </div>
                <div>
                  <h2 style={{ fontWeight: "900", color: "#8b008b" }}>
                    {items.title}{" "}
                  </h2>
                  <p>{items.content}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default OtherNews;
