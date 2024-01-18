import React from 'react'

import './index.css'
import { Link } from 'react-router-dom'
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi'
const Navbar = () => {
  return (
    <div>
      <nav className='nav-bar'>
        <h2>
          <Link to='/' className='project-name'> <BiCameraMovie /> Biblioeteca de filmes</Link>
        </h2>

        <form>
            <input type='text' placeholder='Pesquise aqui' className="input" />
            <button type='submit' className='form-button'><BiSearchAlt2 /></button>
        </form>
      </nav>
    </div>
  )
}

export default Navbar
