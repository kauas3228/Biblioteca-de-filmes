import { Link } from "react-router-dom";

import { FaStar } from "react-icons/fa";

const imgURL = import.meta.env.VITE_IMG;

import "./index.css";

export default function Card({ film, showLink = true }) {
  return (
    <div className="film-card">
      <img src={imgURL + film.poster_path} />
      <h2>{film.title}</h2>

      <p className="vote-average">
        <FaStar /> {film.vote_average}
      </p>

      {showLink && (
        <Link to={`/movie/${film.id}`} className="details">
          Detalhes
        </Link>
      )}
    </div>
  );
}
