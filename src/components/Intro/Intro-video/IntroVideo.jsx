import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "./IntroVideoC.css";

// Import Swiper styles
import { Col, Container, Modal, Row } from "react-bootstrap";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";

const IntroVideo = () => {
  const videos = [
    "https://www.youtube.com/embed/Dn_77i7BL20?si=NFZi3mnOE9mm47cP",
    "https://www.youtube.com/embed/xRTOxR3b-jE?si=w-vjrbVAmVfO5Poz",
    "https://www.youtube.com/embed/NcyDxazsMWY?si=6ufVQ5qM3YeM3UMj",
  ];
  const thumbnails = [
    require("../../../assets/about.jpg"), // Đường dẫn tới thumbnail 1 trong assets
    require("../../../assets/navia.jpg"),
    require("../../../assets/about.jpg"),
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
        <h1>Video</h1>
        <div className="horizontal-line"></div>
      </div>

      <div className="container-video">
        <Swiper
          className="swiper"
          spaceBetween={1}
          slidesPerView={3} // Hiển thị 1 slide tại mỗi lần
          pagination={{
            clickable: true,
          }}
          // loop={true}
          navigation={{ nextEl: false, prevEl: false }}
          modules={[FreeMode, Pagination]}
          // allowTouchMove={true}
          centeredSlides={true}
        >
          {thumbnails.map((thumbnail, index) => (
            <SwiperSlide className="swiper-slide" key={index}>
              <img
                style={{ width: "464px", height: "300px", cursor: "pointer" }}
                src={thumbnail}
                alt={`Thumbnail ${index + 1}`}
                onClick={() => handleThumbnailClick(index)}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <Modal show={showModal} onHide={handleCloseModal} size="xl">
          {/* <Modal.Header></Modal.Header> */}
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
