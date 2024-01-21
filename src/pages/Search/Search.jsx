import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import Card from "../../components/card/Card";

import "./Search.css";

const searchURL = import.meta.env.VITE_API_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

export default function Search() {
  const [searchParams] = useSearchParams();

  const [movies, setMovies] = useState([]);
  const query = searchParams.get("q");

  const getSearchedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setMovies(data.results);
  };

  useEffect(() => {
    const searchedMovies = `${searchURL}?${apiKey}&query=${query}`;

    getSearchedMovies(searchedMovies);
  }, [query]);


  return (
    <div className="container">
      <h2 className="title">
        Resultados para: <span className="quary-text">{query}</span>
      </h2>
    
      <div className="movie-container">
      {movies.length === 0 && <p>Carregando...</p>}
        {movies.length > 0 &&
          movies.map((film) => <Card film={film} key={film.id} />)}
      </div>
    </div>
  );
}
