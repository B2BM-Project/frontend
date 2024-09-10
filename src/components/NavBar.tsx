import "./NavBar.css";
import '../App.css'
import logo from '../assets/logo.png'

function NavBar() {
  return (
    <nav>
      <div className="nav-left">
          <img src={logo} alt="logo" />
      </div>
      <div className="nav-center">
          <a href="#">Learn</a>
          <a href="#">Challenge</a>
          <a href="#">Competition</a>
          <a href="#">Package</a>
      </div>
      <div className="nav-right">
          <button className="navButton">Sign in</button>
      </div>
    </nav>
  );
}

export default NavBar;
