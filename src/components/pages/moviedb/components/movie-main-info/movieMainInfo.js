import React from "react";
import "./movieMainInfo.css";
import MovieRating from "../movie-rating/movieRating";

const MovieMainInfo = ({info}) => {
  const {release, rating } = info;
  return (
    <div className="slider__info-main">
      <div className="slider__published">
        PUBLISHED <span>{release}</span>
      </div>
      <div className="slider__updated">
        UPDATED <span>{release}</span>
      </div>
      <div className="slider__rating">
        RATING
        <MovieRating rating={rating}/>
      </div>
    </div>
  );
};

export default MovieMainInfo;
