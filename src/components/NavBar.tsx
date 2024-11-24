import { Link } from "react-router-dom";
import "./NavBar.css";
import '../App.css'
import logo from '../assets/logo.png'
import { useState } from "react";
import Loginpopup from "./Loginpopup";

function NavBar() {

  const [openPopup, setOpenpopup] = useState(false);

  return (
    <nav>
      <Link to = '/'>
      <div className="nav-left">
          <img className="logoImg" src={logo} alt="logo" />
      </div>
      </Link>
      <div className="nav-center">
          <Link to="/learn">Learn</Link>
          <Link to="/challenge">Challenge</Link>
          <Link to="/competition">Competition</Link>
          <Link to="/package">Package</Link>
      </div>
      <div className="nav-right">
          <button className="navButton" onClick={() => setOpenpopup(true)}>Login</button>
      </div>
      <Loginpopup isOpen={openPopup} onClose={() => setOpenpopup(false)}/>
    </nav>
    
  );
}

export default NavBar;
