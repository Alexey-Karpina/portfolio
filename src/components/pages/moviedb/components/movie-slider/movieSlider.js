import React, { useState } from "react";
import "./movieSlider.css";
import sliderBG from "../../images/slider-bg.png";
import MovieActivity from "../movie-activity/movieActivity";
import MovieMainInfo from "../movie-main-info/movieMainInfo";

const MovieSlider = () => {
  const [backdrop, setBackdrop] = useState(sliderBG);
  const [release, setRelease] = useState("Today");
  const [likes, setLikes] = useState(25);
  const [rating, setRating] = useState(5);
  const [comments, setComments] = useState(100);
  console.log(likes);
  console.log(comments);
  const test = { likes, comments };
  return (
    <figure className="slider__item">
      <img src={backdrop} alt="Slider BG" />
      <figcaption className="slider__info">
        <MovieMainInfo info={(release, rating)} />
        <MovieActivity activity={test} />
      </figcaption>
    </figure>
  );
};

export default MovieSlider;
