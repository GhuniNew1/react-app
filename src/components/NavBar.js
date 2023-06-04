import './NavBar.css';
import Logopng from '../img/Logopng.png';
import {NavLink} from "react-router-dom";


import React from 'react';
export default function NavBar() {
  let activeClassName = "nav-active"
  return (
    <>
      <nav className="navbar">
        <div className="logo-png"><img src={Logopng} alt='logo-png' /></div>
          <ul className="nav-links">

            <input type="checkbox" id="checkbox_toggle" />
            <label htmlFor="checkbox_toggle" className="hamburger">&#9776;</label>

            <div className="menu">

              <li><NavLink style={{textDecoration: 'none'}} end to="/" className= {({ isActive }) => isActive ? activeClassName : "NavLink " } >Home</NavLink></li>
              <li><NavLink style={{textDecoration: 'none'}} to="/Studio" className={({ isActive }) => isActive ? activeClassName : "NavLink " }>Studio</NavLink></li>
              <li><NavLink style={{textDecoration: 'none'}} to="/Jobs" className={({ isActive }) => isActive ? activeClassName : "NavLink " }>Jobs</NavLink></li>
              <li><NavLink style={{textDecoration: 'none'}} to="/Service" className={({ isActive }) => isActive ? activeClassName : "NavLink " }>Service</NavLink></li>
              <li><NavLink style={{textDecoration: 'none'}} to="/News" className={({ isActive }) => isActive ? activeClassName : "NavLink " }>News</NavLink></li>
              <li><NavLink style={{textDecoration: 'none'}} to="/Annoucement" className={({ isActive }) => isActive ? activeClassName : "NavLink " }>Annoucement</NavLink></li>
              <li><NavLink style={{textDecoration: 'none'}} to="/Contact" className={({ isActive }) => isActive ? activeClassName : "NavLink " }>Contact</NavLink></li>
            </div>
          </ul>

      </nav>

    </>

  );
}
