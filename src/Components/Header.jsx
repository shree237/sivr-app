import React, { useState } from "react";
import "../App.css";
import {NavLink} from 'react-router-dom'
import pngegg from "../assets/pngegg.png";


const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false)
  
    const handleShowNavbar = () => {
      setShowNavbar(!showNavbar)
    }
  
    return (
      <nav className="navbar fixed-top">
        <div className="contain">
          <div className="logo">
            <h4>Sivraj Yogi</h4>
          </div>
          <div className="menu-icon" onClick={handleShowNavbar}>
            <img width={24} src={pngegg} alt="" />
          </div>
          <div className={`nav-elements  ${showNavbar && 'active'}`}>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/blog">Books</NavLink>
              </li>
              <li>
                <NavLink to="/projects">Events</NavLink>
              </li>

              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
              <li>
              <button class="button-3" role="button">Login</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
  
  export default Navbar




