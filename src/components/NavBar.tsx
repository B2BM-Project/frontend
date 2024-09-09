import React from "react";
import "./NavBar.css";
import logo from '../assets/logo4.png'

function NavBar() {
  return (
    <nav className="nav">
      <div className="nav-left">
          <img src={logo} alt="logo" />
      </div>
      <div className="nav-center">
        <ul className="nav-ul">
          <li>
            <a className="navtext" href="/Learn">Learn</a>
          </li>
          <li>
            <a className="navtext" href="/Challenge">Challenge</a>
          </li>
          <li>
            <a className="navtext" href="/Competiton">Competiton</a>
          </li>
          <li>
            <a className="navtext" href="/Package">Package</a>
          </li>
        </ul>
      </div>
      <div className="nav-right">
        <button className="navButton">Sign in</button>
      </div>
    </nav>
  );
}

export default NavBar;
