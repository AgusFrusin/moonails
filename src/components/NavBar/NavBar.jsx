import React from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
  return (
    <header>
        <h1>MOON NAILS</h1>

        <nav>
            <ul>
                <li>Esculpidas</li>
                <li>SemiPermanente</li>
                <li>Kapping</li>
            </ul>
        </nav>

        <CartWidget/>
        
    </header>
  )
}

export default NavBar