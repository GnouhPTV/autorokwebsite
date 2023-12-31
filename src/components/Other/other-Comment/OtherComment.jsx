import React from "react";
import {  Container } from "react-bootstrap";

// import ava2 from "../../../assets/ava2.jpg";


import "../other-Comment/OtherCommentC.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import {  Pagination, Autoplay } from "swiper/modules";

function OtherComment() {
  const commentMan = [
    {
      ava: require("../../../assets/ava2.jpg"),
      rate: "⭐⭐⭐ (3/5)",
      name: "Lê",
      com: "oke !!",
    },
    {
      ava: require("../../../assets/iconlogo.png"),
      rate: "⭐⭐⭐⭐ (4/5)",
      name: "Thanh",
      com: "tạm ổn",
    },
    {
      ava: require("../../../assets/ava2.jpg"),
      rate: "⭐⭐⭐⭐⭐ (5/5)",
      name: "Phương",
      com: "tin dùng dịch vụ",
    },
    {
      ava: require("../../../assets/ava2.jpg"),
      rate: "⭐⭐⭐⭐ (4/5)",
      name: "Khánh",
      com: "oke la ",
    },
    {
      ava: require("../../../assets/ava2.jpg"),
      name: "Nguyễn",
      rate: "⭐⭐⭐⭐⭐ (5/5)",
      com: "đánh giá trên điểm 10",
    },
  ];


  return (
    <Container style={{marginTop:"30px"}}>
      <div className="title">
        <h3 className="">Đánh giá</h3>
      </div>
      {/*  */}
      <div >
        {/*  */}
        <Swiper
          className="swiper"
          spaceBetween={10}
          slidesPerView={3}
          pagination={{
            clickable: true,
          }}
          loop={true}
          navigation={{ nextEl: false, prevEl: false }}
          modules={[Pagination, Autoplay]} // Chắc chắn rằng bạn đã viết "Pagination" viết hoa ở đây
          centeredSlides={true}
          autoplay={{
            delay: 100000,
            disableOnInteraction: false,
          }}
          speed={2500}
          style={{ height: "450px" }}
        >
          <Container>
            {commentMan.map((items, index) => (
              <SwiperSlide
                className="swiper-slide "
                style={{ height: "500px" }}
              >
                <div className=" py-4">
                  <div className="custom d-flex align-item-center gap-4 mt-3">
                    <img src={items.ava} className="" alt="" />
                    <h4 className="Custom_Name mb-0 mt-3">{items.name}</h4>
                  </div>
                  <div className="comment">
                    <h6> { items.rate}</h6>
                    <p className="comment-text">{items.com}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Container>
        </Swiper>

        {/*  */}
      </div>
    </Container>
  );
}

export default OtherComment;
