import React from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  const imgLuna = 'https://www.nationalgeographic.com.es/medio/2022/02/08/imagen-de-la-luna-tomada-en-1991_682424f4_800x800.jpg';
  return (
    <header>
      <Link to={"/"}>
        <img className="imgLuna" src={imgLuna} alt="Logo Luna" />
      </Link>
      <ul>
        <li>
          <NavLink to={`/categoria/3`}>Esculpidas</NavLink>
        </li>

        <li>
          <NavLink to={`/categoria/4`} >Esmaltado SemiPermanente</NavLink>
        </li>

        <li>
          <NavLink to={`/categoria/5`} >Kapping</NavLink>
        </li>

      </ul>
      <CartWidget />

    </header>
  )
}

export default NavBar