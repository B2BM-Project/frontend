import { Link } from "react-router-dom";
import './NavBar.css';
import '../App.css';
import logo from '../assets/logo.png';

function NavBar({ onLoginClick, onLogout, username }: { onLoginClick: any, onLogout: any, username: string | null }) {
    return (
        <nav>
            <Link to='/'>
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
                {username ? (
                    <>
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-xs m-1">Click</div>
                            <ul tabIndex={0} className="dropdown-content menu bg-[#000] rounded-box z-[1] w-52 p-2 shadow">
                                <li><Link to="/profile" className="username">{username}</Link></li>
                                <li><a className="navButton" onClick={onLogout}>Logout</a></li>
                            </ul>
                        </div>
                    </>
                ) : (
                    <button className="navButton" onClick={onLoginClick}>Login</button>
                )}
            </div>
        </nav>
    );
}

export default NavBar;
