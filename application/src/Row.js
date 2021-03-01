import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";
const baseURL = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchURL }) {
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
      <div className="row__posters">
        {movies.map(movie => {
          return <img className="row__poster" src={`${baseURL}${movie.poster_path}`} alt={movie.name} />;
        })}
      </div>
      <h2>{title}</h2>
      {/* container -> posters */}
    </div>
  );
}

export default Row;
