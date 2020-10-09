import React from "react";
import "./CarouselFacts.scss";
import FactsSlides from "./FactsSlides";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";

const CarouselFacts = ({ title, slides }) => {
  const slidesFacts = slides.map((slides) => (
    <SwiperSlide>
      <FactsSlides item={slides} key={slides.id} />
    </SwiperSlide>
  ));

  return (
    <section className="facts">
      <h2 className="facts-title">{title}</h2>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        centeredSlides={true}
        pagination={{ clickable: true }}
      >
        {slidesFacts}
      </Swiper>
    </section>
  );
};

export default CarouselFacts;
