import React from "react";
import "./randomMovie.css";
import Slider from "react-slick";
import MovieSlider from '../movie-slider/movieSlider';

const settings = {
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  vertical: true,
  verticalSwiping: true,
  autoplay: true,
  autoplaySpeed: 5000,
  pauseOnHover: true,
  beforeChange: function (currentSlide, nextSlide) {
    console.log("before change", currentSlide, nextSlide);
  },
  afterChange: function (currentSlide) {
    console.log("after change", currentSlide);
  },
};

const RandomMovie = () => {
  return (
    <section className="movie__slider">
      <div className="slider-window">
        <Slider {...settings}>
          <MovieSlider />
          <MovieSlider />
          <MovieSlider />
        </Slider>
      </div>
    </section>
  );
};

export default RandomMovie;
