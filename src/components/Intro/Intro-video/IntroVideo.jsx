import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "./IntroVideoC.css";

// Import Swiper styles
import { Col, Container, Modal, Row } from "react-bootstrap";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { FreeMode, Pagination, Autoplay  } from "swiper/modules";

const IntroVideo = () => {
  const videos = [
    "https://www.youtube.com/embed/Dn_77i7BL20?si=NFZi3mnOE9mm47cP",
    "https://www.youtube.com/embed/0GZoYuFXObw?si=JKzUyd6Sz32LcUQP",
    "https://www.youtube.com/embed/e86K7Esgr6A?si=hK_IDz26J5PtxgDr",
    "https://www.youtube.com/embed/e86K7Esgr6A?si=hK_IDz26J5PtxgDr",
  ];
  const thumbnails = [
    require("../../../assets/about.jpg"),
    require("../../../assets/ảnh2.jpg"),
    require("../../../assets/IntroImage.jpg"),
    require("../../../assets/IntroImage.jpg"),
  ];

  const [selectedThumbnailIndex, setSelectedThumbnailIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleThumbnailClick = (index) => {
    setSelectedThumbnailIndex(index);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div id="video">
        <div className="horizontal-line"></div>
        <h1 style={{ color: "#8b008b" }}>Video</h1>
        <div className="horizontal-line"></div>
      </div>

      <div className="container-video">
        <Swiper
          className="swiper"
          spaceBetween={10}
          slidesPerView={3}
          pagination={{
            clickable: true,
          }}
          loop={true}
          navigation={{ nextEl: false, prevEl: false }}
          modules={[ Pagination, Autoplay]} // Chắc chắn rằng bạn đã viết "Pagination" viết hoa ở đây
          centeredSlides={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          speed={2500}
        >
          <Container>
            {thumbnails.map((thumbnail, index) => (
              <SwiperSlide className="swiper-slide" key={index}>
                <img
                  src={thumbnail}
                  alt={`Thumbnail ${index + 1}`}
                  onClick={() => handleThumbnailClick(index)}
                />
              </SwiperSlide>
            ))}
          </Container>
        </Swiper>
        {/*  */}
        <Modal show={showModal} onHide={handleCloseModal} size="xl">
          <Row>
            <Col lg="11" style={{ margin: "0", padding: "0" }}>
              <iframe
                width="100%"
                height="600"
                src={videos[selectedThumbnailIndex]}
                title={`YouTube video player ${selectedThumbnailIndex + 1}`}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </Col>
            <Col lg="1" className="swiper-col">
              <i
                onClick={handleCloseModal}
                class="fa fa-times"
                aria-hidden="true"
                style={{ fontSize: "34px", color: "red" }}
              ></i>
            </Col>
          </Row>
        </Modal>
      </div>
    </>
  );
};

export default IntroVideo;
