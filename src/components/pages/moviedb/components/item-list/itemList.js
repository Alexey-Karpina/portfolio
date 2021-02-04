import React from "react";
import "./itemList.css";

import MovieItem from "../movie-item/movieItem";

const ItemList = () => {
  return (
    <ul className="featured__list">
      <li className="featured__item">
        <MovieItem />
      </li>
      <li className="featured__item">
        <MovieItem />
      </li>
      <li className="featured__item">
        <MovieItem />
      </li>
      <li className="featured__item">
        <MovieItem />
      </li>
      <li className="featured__item">
        <MovieItem />
      </li>
      <li className="featured__item">
        <MovieItem />
      </li>
      <li className="featured__item">
        <MovieItem />
      </li>
      <li className="featured__item">
        <MovieItem />
      </li>
      <li className="featured__item">
        <MovieItem />
      </li>
      <li className="featured__item">
        <MovieItem />
      </li>
      <li className="featured__item">
        <MovieItem />
      </li>
    </ul>
  );
};

export default ItemList;
