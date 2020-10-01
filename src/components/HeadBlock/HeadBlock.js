import React from "react";
import "./HeadBlock.scss";

const HeadBlock = ({ title, links, logos }) => {
  const logosImages = logos.map((logoItem) => (
    <img
      src={logoItem.image}
      alt={logoItem.nameLogo}
      className="head-partners-image"
    />
  ));

  const linksHead = links.map((linksItem) => (
    <a href={linksItem.href} className="head-links-item">
      {linksItem.title}
    </a>
  ));
  return (
    <section className="head">
      <div className="container">
        <div className="head-partners">{logosImages}</div>
        <nav className="head-links">{linksHead}</nav>
        <h1 className="head-title">{title}</h1>
        <a href="#" className="head-link-anchor">
          Отследить
        </a>
      </div>
    </section>
  );
};

export default HeadBlock;
