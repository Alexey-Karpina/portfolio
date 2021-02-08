import React from "react";
import MovieDownloads from "../movie-downloads/movieDownloads";
import MovieLikes from "../movie-likes/movieLikes";
import MovieComments from "../movieComments/movieComments";
import "./movieActivity.css";

const MovieActivity = ( {activity} ) => {
  const { likes, comments } = activity;
  console.log(likes);

  return (
    <>
      <div className="slider__info-activity">
        <div className="slider__likes">
          <MovieLikes likes={likes} />
        </div>
        <div className="slider__comments">
          <MovieComments comments={comments} />
        </div>
        <div className="slider__likes">
          <MovieDownloads />
        </div>
      </div>
    </>
  );
};

export default MovieActivity;
