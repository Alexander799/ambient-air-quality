import React from "react";
import "./App.scss";
import HeadBlock from "./components/HeadBlock/HeadBlock";
import eastPartnersLogo from "./assets/east-partner-logo.svg";
import gcLogo from "./assets/GC-logo.svg";
import itnLogo from "./assets/ITN-logo.svg";
import CarouselFacts from "./components/CarouselFacts/CarouselFacts";

function App() {
  const partners = [
    {
      image: eastPartnersLogo,
      nameLogo: "Схід економічних можливостей",
    },
    {
      image: itnLogo,
      nameLogo: "IT Nation",
    },
    {
      image: gcLogo,
      nameLogo: "Global compact network Ukraine",
    },
  ];
  const navLinks = [
    {
      title: "Основные факты",
      href: "#basic-facts",
    },
    {
      title: "Индекс качества воздуха",
      href: "#index-air-quality",
    },
    {
      title: "Политика по уменьшению загрязнений",
      href: "#purge-policy",
    },
  ];
  const factsSlides = [
    {
      lnkImg = require("./assets/imgCarouselFacts/slide-1"),
      sldDescription = "Женщины и дети – главные жертвы загрязнения воздуха"
    },
    {
      lnkImg = require("./assets/imgCarouselFacts/slide-2"),
      sldDescription = "Защитники окружающей среды подвергаются преследованиям"
    },
    {
      lnkImg = require("./assets/imgCarouselFacts/slide-3"),
      sldDescription = "Загрязнение воздуха – нарушение прав человека"
    },
    {
      lnkImg = require("./assets/imgCarouselFacts/slide-4"),
      sldDescription = "4,2 миллиона случаев преждевременной смерти людей из-за загрязнения атмосферного воздуха"
    },
    {
      lnkImg = require("./assets/imgCarouselFacts/slide-5"),
      sldDescription = "Согласно оценкам, суммарный объем затрат в связи с загрязнением воздуха превышает 5 трлн долл. в год."
    }
  ];
  return (
    <>
      <HeadBlock
        title="Качество атмосферного воздуха и здоровье"
        links={navLinks}
        logos={partners}
      />
      <CarouselFacts title="Основные факты" slides={factsSlides} />
    </>
  );
}

export default App;
