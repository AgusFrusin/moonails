import React from 'react'
import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'
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
          <NavLink to={`/categoria/2`}>Con Gel</NavLink>
        </li>

        <li>
          <NavLink to={`/categoria/3`} >Sin</NavLink>
        </li>
        
      </ul>
      <CartWidget />
    </header>
  )
}

export default NavBar