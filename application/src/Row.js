import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";
const baseURL = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchURL, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    //
    async function fetchData() {
      const requests = await axios.get(fetchURL);
      setMovies(requests.data.results);
      return requests;
    }
    fetchData();
  }, [fetchURL]);
  return (
    <div className="row">
      <h2 className="row__title">{title}</h2>
      <div className="row__posters">
        {movies.map(movie => {
          return (
            <img
              key={movie.id}
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              src={`${baseURL}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
              alt={movie.name}
            />
          );
        })}
      </div>
      {/* container -> posters */}
    </div>
  );
}

export default Row;
