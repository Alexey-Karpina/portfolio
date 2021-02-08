import React, {useState} from "react";
import "./movieItem.css";
import Item1 from "../../images/item1.png";
import MovieLikes from "../movie-likes/movieLikes";
import MovieActivity from "../movie-activity/movieActivity";
import MovieRating from "../movie-rating/movieRating";
import MovieComments from "../movieComments/movieComments";
import MovieDownloads from "../movie-downloads/movieDownloads";

const MovieItem = () => {
  
  
  return (
    <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
      <div class="flipper">
        <div class="front">
          <img src={Item1} />
          <div className="item__likes">
            <MovieLikes />
          </div>
          <div className="item__name">Guardians of the Galaxy</div>
        </div>
        <div class="back">
          <div className="item__info">
            <div className="item__likes">
              <MovieLikes />
            </div>
            <div className="item__comments">
              <MovieComments />
            </div>
            <div className="item__downloads">
              <MovieDownloads />
            </div>
          </div>
          <div className="item__rating">
            Rating: <MovieRating />
          </div>
          <div className="item__release">
            Release Date: <span>May 03, 2013</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieItem;
