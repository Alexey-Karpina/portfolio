import React from "react";
import "./movieMainInfo.css";
import MovieRating from "../movie-rating/movieRating";

const MovieMainInfo = () => {
  return (
    <div className="slider__info-main">
      <div className="slider__published">
        PUBLISHED <span>FEB 20, 2014</span>
      </div>
      <div className="slider__updated">
        UPDATED <span>FEB 20, 2014</span>
      </div>
      <div className="slider__rating">
        RATING
        <MovieRating />
      </div>
    </div>
  );
};

export default MovieMainInfo;
