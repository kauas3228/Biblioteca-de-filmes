import { useState, useEffect } from "react";
import Card from "../../components/card/Card";

import "./home.css";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

export default function Home() {
  const [topFilms, setTopFilms] = useState([]);

  const getTopFilms = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setTopFilms(data.results);
  };

  useEffect(() => {
    const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;

    getTopFilms(topRatedUrl);
  }, []);

  return (
    <div className="container">
      <h2 className="title">Filmes com melhor avaliação:</h2>

      <div className="films-container">
        {topFilms.length === 0 && <div class="custom-loader"></div>}
        {topFilms.length > 0 &&
          topFilms.map((film) => <Card film={film} key={film.id} />)}
      </div>
    </div>
  );
}
