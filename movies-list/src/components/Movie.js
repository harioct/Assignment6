import React from "react";
import noImage from "../assets/images/no-image.png"

const Movie = ({ movie }) => {
  return (
    <div className="movie">
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : noImage}
        alt={movie.Title}
      />
      <h2>{movie.Title}</h2>
    </div>
  )
}

export default Movie;
