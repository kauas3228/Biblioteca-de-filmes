import { useState } from "react";


import "./index.css";
import { Link, useNavigate } from "react-router-dom";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";
const Navbar = () => {

  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) =>{
    e.preventDefault();

    if(!search) return

    navigate(`/search?q=${search}`);
    setSearch("")
  }

  return (
    <div>
      <nav className="nav-bar">
        <h2>
          <Link to="/" className="project-name">
            {" "}
            <BiCameraMovie /> <p>Biblioeteca de filmes</p>
          </Link>
        </h2>

        <form onSubmit={handleSubmit}>
          <input 
          type="text" 
          placeholder="Pesquise aqui" 
          className="input" 
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          />
          <button type="submit" className="form-button">
            <BiSearchAlt2 />
          </button>
        </form>
      </nav>
    </div>
  );
};

export default Navbar;
