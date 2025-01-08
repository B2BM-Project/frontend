import { Link } from "react-router-dom";
import Loginpopup from '../components/Loginpopup.tsx';
import "./NavBar.css";
import '../App.css'
import logo from '../assets/logo.png'

function NavBar({ avatar, onLoginClick, onLogout }: { avatar: string | null; onLoginClick: () => void; onLogout: () => void }) {
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
                
                    {avatar ? (
                        <>
                            <div className="dropdown">
                                <div className="flex items-center gap-4">
                                    <div className="avatar">
                                        <div className="w-8 rounded-full">
                                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                        </div>
                                    </div>
                                </div>
                                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                    <li><a>Item 1</a></li>
                                    <li><a>Item 2</a></li>
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
