import React from "react";
import './movieItem.css';
import Item1 from "../../images/item1.png";
import MovieLikes from "../movie-likes/movieLikes";

const MovieItem = () => {
  return (
    <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
      <div class="flipper">
        <div class="front">
          <img src={Item1} />
          <MovieLikes />
          <div className="item__name">Guardians of the Galaxy</div>
        </div>
        <div class="back">
            Some Info
        </div>
      </div>
    </div>
  );
};

export default MovieItem;
