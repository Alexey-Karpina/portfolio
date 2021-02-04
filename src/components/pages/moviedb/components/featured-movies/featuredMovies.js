import React from "react";

import FeaturedHeader from "../features-header/featuredHeader";
import ItemList from "../item-list/itemList";

const FeaturedMovies = () => {
  return (
      <section className="movie__featured">
        <FeaturedHeader />
        <ItemList />
      </section>  
  );
};

export default FeaturedMovies;
