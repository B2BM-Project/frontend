// @ts-nocheck
import { Link } from "react-router-dom";
import { useState } from "react";
import "./NavBar.css";
import '../App.css'
import logo from '../assets/logo.png'
import { useAuth } from '../context/AuthContext';


function NavBar({ onLoginClick, onLogout }: { onLoginClick: () => void; onLogout: () => void }) {
    const { avatar, isLoggedIn } = useAuth(); // ใช้ useAuth เพื่อเข้าถึงข้อมูล
  
    const [isDropdownOpen, setDropdownOpen] = useState(false);
  
    const handleToggleDropdown = () => {
      setDropdownOpen(!isDropdownOpen);
    };
  
    const handleCloseDropdown = () => {
      setDropdownOpen(false);
    };

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
                {isLoggedIn   ? (
                    <>
                        <div className="relative">
                            {/* Avatar */}
                            <div className="avatar cursor-pointer" onClick={handleToggleDropdown}>
                                <div className="w-8 rounded-full">
                                    <img
                                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                        alt="User Avatar"
                                    />
                                </div>
                            </div>

                            {/* Dropdown Menu */}
                            {isDropdownOpen && (
                                <ul className="absolute right-0 mt-2 dropdown-content menu bg-[#000] rounded-box z-10 w-52 p-2 shadow">
                                    <li>
                                        <a href="#">Profile</a>
                                    </li>
                                    <li>
                                        <button className="navButton" onClick={onLogout}>Logout</button>
                                    </li>
                                </ul>
                            )}

                            {/* Overlay เพื่อปิด dropdown เมื่อคลิกข้างนอก */}
                            {isDropdownOpen && (
                                <div className="fixed inset-0 z-0" onClick={handleCloseDropdown}></div>
                            )}
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
