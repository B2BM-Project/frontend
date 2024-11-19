import { Link } from "react-router-dom";
import "./NavBar.css";
import '../App.css'
import logo from '../assets/logo.png'


function NavBar() {
  return (
    <nav>
      <Link to = '/'>
      <div className="nav-left">
          <img src={logo} alt="logo" />
      </div>
      </Link>
      <div className="nav-center">
          <Link to="/learn">Learn</Link>
          <Link to="/challenge">Challenge</Link>
          <Link to="/competition">Competition</Link>
          <Link to="/package">Package</Link>
      </div>
      <div className="nav-right">
          <button className="navButton">Sign in</button>
      </div>
    </nav>
  );
}

export default NavBar;
