import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return ( 
        <nav className='nav border-bottom border-info border-3 bg-secondary shadow'>
            <div className='container d-flex align-items-center justify-content-evenly fs-2'>
            <Link className='nav-link' to="/portfolio">Projets</Link>
            <Link className='nav-link' to="/parcours">Parcours & Compétences</Link>
            <Link className='nav-link' to="/contact">Contact</Link>
            </div>
        </nav>
  )
}
