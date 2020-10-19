import React from "react";
import "./CarouselFacts.scss";
import FactsSlides from "./FactsSlides";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination} from 'swiper';
import "swiper/swiper.scss";
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

SwiperCore.use([Navigation, Pagination]);

const CarouselFacts = ({ title, slides }) => {
  const slidesFacts = slides.map((slides) => (
    <SwiperSlide key={slides.id}>
      <FactsSlides item={slides} />
    </SwiperSlide>
  ));

  return (
    <section className="facts container">
      <h2 className="facts-title">{title}</h2>
      <div className="swiper-button-prev"/>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        centeredSlides={true}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next"
        }}
        pagination={{
          el: ".facts-page",
          clickable: true,
          renderBullet: function (index, className) {
            return `<span class="facts-page-bullet"></span>`;
          }
        }}
      >
        {slidesFacts}
      </Swiper>
      <div className="swiper-button-next" />
      <div className="facts-page" />
    </section>
  );
};

export default CarouselFacts;
