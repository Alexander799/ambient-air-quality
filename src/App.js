import React from "react";
import "./App.scss";
import HeadBlock from "./components/HeadBlock/HeadBlock";
import eastPartnersLogo from "./assets/east-partner-logo.svg";
import gcLogo from "./assets/GC-logo.svg";
import itnLogo from "./assets/ITN-logo.svg";

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
  return (
    <>
      <HeadBlock
        title="Качество атмосферного воздуха и здоровье"
        links={navLinks}
        logos={partners}
      />
    </>
  );
}

export default App;
