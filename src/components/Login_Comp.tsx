// @ts-nocheck
import { useState } from "react";
import { useAuth } from '../context/AuthContext';
import NavBar from "./NavBar";
import Loginpopup from "./Loginpopup";


function Login_Comp() {
    const { authToken, avatar, setAuthToken, setAvatar, setIsLoggedIn } = useAuth();
    const [isLoginPopupOpen, setLoginPopupOpen] = useState(false);
  
    const handleLoginSuccess = (avatar: string, authToken: string) => {
      setAvatar(avatar);
      setAuthToken(authToken);
      setIsLoggedIn(true); // เมื่อทำการล็อกอินให้ตั้งสถานะว่า logged in
      localStorage.setItem('authToken', authToken); // เก็บ authToken ใน localStorage
      setLoginPopupOpen(false);
    };
  
    const handleLogout = () => {
      setAvatar(null);
      setAuthToken(null);
      setIsLoggedIn(false); // เมื่อทำการล็อกเอาท์ให้ตั้งสถานะว่าไม่ได้ล็อกอิน
      localStorage.removeItem('authToken');
    };

    return (
        <>
            <div>
                <NavBar
                    avatar={avatar}
                    onLoginClick={() => setLoginPopupOpen(true)}
                    onLogout={handleLogout}
                />
                <Loginpopup
                    isOpen={isLoginPopupOpen}
                    onClose={() => setLoginPopupOpen(false)}
                    onLoginSuccess={handleLoginSuccess}
                />
            </div>
        </>
    );
}

export default Login_Comp;
