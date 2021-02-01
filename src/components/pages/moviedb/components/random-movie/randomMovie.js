import React from "react";
import "./randomMovie.css";
import sliderBG from "../../images/slider-bg.png";
import Slider from "react-slick";

const settings = {
  dots: true,
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
          <div className="slider-window">
            <img src={sliderBG} />
          </div>
          <div className="slider-window">
            <img src={sliderBG} />
          </div>
          <div className="slider-window">
            <img src={sliderBG} />
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default RandomMovie;
