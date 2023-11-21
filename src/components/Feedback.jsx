import React from 'react';
import { Container } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';

export default function FeedBack() {
  return (
    <div id='feedback' className='feedback'>
      <Container>
        <div className='main-title' style={{ marginBottom: '50px' }}>
          <h2 className='main-title-inner'>F E E D B A C K</h2>
        </div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className='mySwiper'
        >
          <SwiperSlide>
            <div style={{ width: '100%', marginRight: '30px' }}>
              <div className='feedback-slide'>
                <i className='fa fa-quote-left'></i>
                <div className='feedback-prev'>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                </div>
                <div className='feedback-name'>- J Smile</div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div style={{ width: '100%', marginRight: '30px' }}>
              <div className='feedback-slide'>
                <i className='fa fa-quote-left'></i>
                <div className='feedback-prev'>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                </div>
                <div className='feedback-name'>- Tomas Ivoška</div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div style={{ width: '100%', marginRight: '30px' }}>
              <div className='feedback-slide'>
                <i className='fa fa-quote-left'></i>
                <div className='feedback-prev'>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                </div>
                <div className='feedback-name'>- Hoàng Phạm</div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div style={{ width: '100%', marginRight: '30px' }}>
              <div className='feedback-slide'>
                <i className='fa fa-quote-left'></i>
                <div className='feedback-prev'>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                </div>
                <div className='feedback-name'>- Bảo Thái Lương</div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </Container>
    </div>
  );
}
