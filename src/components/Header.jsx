/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link, animateScroll as scroll } from "react-scroll";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

function Header() {
  const { t } = useTranslation(); // Initialize useTranslation

  const scrollToMain2 = () => {
    scroll.scrollTo("main2", {
      duration: 300,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <>
      <div id="main">
        <div className="name">
          <h2 style={{ color: "#8b008b" }}>BẮT ĐẦU DÙNG THỬ MIỄN PHÍ</h2>
          <h1>
            <span>ICEBEAR BOT</span>
          </h1>
          <p className="details">Dịch vụ tự động hóa an toàn và chất lượng</p>
          <div className="header-btns">
            <Link
              to="main2"
              spy={true}
              smooth={true}
              duration={300}
              className="header-btn"
              onClick={scrollToMain2}
            >
              JOIN US
            </Link>
          </div>
        </div>
      </div>
      <div id="main2">
        <h2
          style={{
            fontSize: "36px",
            margin: "10px 0",
            color: "#000",
            marginBottom: "50px",
          }}
        >
          TẠI SAO CHÚNG TA NÊN SỬ DỤNG TỰ ĐỘNG HOÁ?
        </h2>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <div
            style={{
              borderBottom: "1px solid rgba(0,0,0,0.3)",
              position: "absolute",
              left: "150px",
              right: "150px",
              bottom: "0",
            }}
          ></div>
          <div
            style={{ height: "470px", width: "1608px", margin: "0 auto" }}
            className="swiper-container"
          >
            <div className="swiper-wrapper">
              <SwiperSlide>
                <section className="item1">
                  <h4
                    style={{
                      fontSize: "36px",
                      color: "#000",
                      margin: "5px 0",
                      marginBottom: "20px",
                    }}
                  >
                    Hữu ích với người bận rộn
                  </h4>
                  <p
                    style={{
                      fontSize: "22px",
                      color: "rgba(0,0,0,0.7",
                      lineHeight: "35px",
                      width: "800px",
                      margin: "0 auto",
                    }}
                  >
                    - Thay vì thời gian bạn phải tự tay thao tác các hoạt động
                    lặp đi lặp lại liên tục trên trò chơi, thì bây giờ tự động
                    hóa sẽ giúp bạn làm tất cả những hoạt động đó.
                    <br />- Tiết kiệm thời gian, giúp bạn có thêm nhiều thời
                    gian cho công việc và gia đình.
                  </p>
                  <p
                    style={{
                      fontSize: "22px",
                      color: "rgba(0,0,0,0.7",
                      lineHeight: "35px",
                      width: "800px",
                      margin: "0 auto",
                    }}
                  ></p>
                </section>
              </SwiperSlide>
              <SwiperSlide>
                <section className="item2">
                  <h4
                    style={{
                      fontSize: "36px",
                      color: "#000",
                      margin: "5px 0",
                      marginBottom: "20px",
                    }}
                  >
                    Tiết kiệm RẤT NHIỀU chi phí
                  </h4>
                  <p
                    style={{
                      fontSize: "22px",
                      color: "rgba(0,0,0,0.7",
                      lineHeight: "35px",
                      width: "800px",
                      margin: "0 auto",
                    }}
                  >
                    - Giúp bạn giảm bớt chi phí nạp gem trực tiếp, chỉ cần nạp
                    vào những gói ưu đãi khác (ví dụ: trang bị, vũ trang, tượng
                    vàng, sao vàng,...).
                    <br />- Giảm bớt chi phí nhân công (Thuê người khác cày tài
                    khoản cho mình).
                  </p>
                  <p
                    style={{
                      fontSize: "22px",
                      color: "rgba(0,0,0,0.7",
                      lineHeight: "35px",
                      width: "800px",
                      margin: "0 auto",
                    }}
                  ></p>
                </section>
              </SwiperSlide>
              <SwiperSlide>
                <section className="item2">
                  <h4
                    style={{
                      fontSize: "36px",
                      color: "#000",
                      margin: "5px 0",
                      marginBottom: "20px",
                    }}
                  >
                    Kéo gần khoảng cách giữa boss và người chơi thường
                  </h4>
                  <p
                    style={{
                      fontSize: "22px",
                      color: "rgba(0,0,0,0.7",
                      lineHeight: "35px",
                      width: "800px",
                      margin: "0 auto",
                    }}
                  >
                    - Khi boss nạp quá nhiều, tạo sức mạnh quá chênh lệch với
                    những người chơi khác, việc này sẽ làm cho những người cày
                    chay cảm thấy chán nản vì cày hoài vẫn “không mạnh bằng
                    boss”.
                    <br />
                    - Khi người thường sử dụng auto họ sẽ có nhiều lợi tức thu
                    về (gem, tài nguyên,...) để tham gia vào các sự kiện nhằm
                    mục đich nâng cấp sức mạnh của họ.
                    <br />
                    - Từ đó mọi người chơi đều cảm thấy bình đẳng, họ sẽ đồng
                    hành với game lâu dài hơn, và có thể kéo thêm nhiều bạn bè
                    hơn tham gia vào game.
                    <br />- Là lợi ích song song giữa Nhà phát hành game và
                    Người sử dụng auto.
                  </p>
                  <p
                    style={{
                      fontSize: "22px",
                      color: "rgba(0,0,0,0.7",
                      lineHeight: "35px",
                      width: "800px",
                      margin: "0 auto",
                    }}
                  ></p>
                </section>
              </SwiperSlide>
              <SwiperSlide>
                <section className="item2">
                  <h4
                    style={{
                      fontSize: "36px",
                      color: "#000",
                      margin: "5px 0",
                      marginBottom: "20px",
                    }}
                  >
                    Có lợi cho sức khỏe
                  </h4>
                  <p
                    style={{
                      fontSize: "22px",
                      color: "rgba(0,0,0,0.7",
                      lineHeight: "35px",
                      width: "800px",
                      margin: "0 auto",
                    }}
                  >
                    - Như người ta thường nói “chơi game quá 180p sẽ không có
                    lợi cho sức khỏe”.
                    <br />
                    - Tuy nhiên, bạn biết rằng đây là một tựa game quốc tế, nên
                    hầu như hoạt động trong game luôn diễn ra 24/24 không ngừng
                    nghỉ.
                    <br />
                    - Cho nên chỉ cần bạn dừng lại chút thôi thì tài khoản của
                    bạn sẽ yếu hơn người chơi chơi nhiều hơn bạn.
                    <br />
                    - Nhưng việc mắt dán vào màn hình vào một khoảng thời gian
                    dài sẽ vô cùng tệ đối với sức khỏe của bản thân.
                    <br />- Cho nên việc sử dụng auto không những giảm tối đa
                    thời gian bạn vào thao tác trên game mà còn giữ gìn sức khỏe
                    cho chính bản thân bạn.
                  </p>
                  <p
                    style={{
                      fontSize: "22px",
                      color: "rgba(0,0,0,0.7",
                      lineHeight: "35px",
                      width: "800px",
                      margin: "0 auto",
                    }}
                  ></p>
                </section>
              </SwiperSlide>
              <SwiperSlide>
                <section className="item2">
                  <h4
                    style={{
                      fontSize: "36px",
                      color: "#000",
                      margin: "5px 0",
                      marginBottom: "20px",
                    }}
                  >
                    An toàn – Tiện lợi – Nhanh chóng
                  </h4>
                  <p
                    style={{
                      fontSize: "22px",
                      color: "rgba(0,0,0,0.7",
                      lineHeight: "35px",
                      width: "800px",
                      margin: "0 auto",
                    }}
                  >
                    - An toàn tuyệt đối cho tài khoản của bạn.
                    <br />- Đội ngũ hỗ trợ siêu tốc, siêu nhiệt tình.
                    <br />- Giá thành phải chăng, có nhiều sự lựa chọn và có hoa
                    hồng khi giới thiệu sử dụng dịch vụ.
                    <br />- Auto update thường xuyên tránh việc bắt bài thuật
                    toán của auto.
                    <br />- Có cảnh báo quét ban cho người dùng.
                    <br />- Có mẹo tránh ban, tránh cấm quân.
                    <br />- Tài khoản được bảo mật tuyệt đối, đảm bảo không thêm
                    liên kết.
                  </p>
                  <p
                    style={{
                      fontSize: "22px",
                      color: "rgba(0,0,0,0.7",
                      lineHeight: "35px",
                      width: "800px",
                      margin: "0 auto",
                    }}
                  ></p>
                </section>
              </SwiperSlide>
            </div>
          </div>
        </Swiper>
      </div>
    </>
  );
}

export default Header;
