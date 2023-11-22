import React from 'react';
import { Container } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { useTranslation } from 'react-i18next';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Feedback() {
  const { t } = useTranslation();

  return (
    <div id='feedback' className='feedback'>
      <Container>
        <div className='main-title' style={{ marginBottom: '50px' }}>
          <h2 className='main-title-inner'>{t('Feedback.title')}</h2>
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
          {t('Feedback.quotes', { returnObjects: true }).map((quote, index) => (
            <SwiperSlide key={index}>
              <div style={{ width: '100%', marginRight: '30px' }}>
                <div className='feedback-slide'>
                  <i className='fa fa-quote-left'></i>
                  <div className='feedback-prev'>{quote.text}</div>
                  <div className='feedback-name'>{quote.author}</div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
}
