import React from "react";

import "./featuredHeader.css";

const FeaturedHeader = () => {
  return (
    <section className="featured__header">
      <div className="featured__title">FEATURED MOVIES</div>
      <div className="featured__about">New Realised / Trailers & Clips</div>
      <div className="featured__search">
          <input placeholder="Search..."/>
          <button className="button__search"></button>
      </div>
    </section>
  );
};

export default FeaturedHeader;
