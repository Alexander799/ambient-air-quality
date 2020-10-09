import React from "react";

const FactsSlides = ({ item }) => {
  return (
    <div className="facts-slide">
      <img src={item.lnkImg} alt="slide-image" className="facts-image" />
      <p className="facts-desc">{item.sldDescription}</p>
    </div>
  );
};

export default FactsSlides;
