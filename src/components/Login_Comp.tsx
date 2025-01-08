import { useState, useEffect } from "react";
import NavBar from "./NavBar";
import Loginpopup from "./Loginpopup";

function Login_Comp() {
    const [isLoginPopupOpen, setLoginPopupOpen] = useState(false);
    const [avatar, setAvatar] = useState<string | null>(null);
    const [token, setToken] = useState<string | null>(null);

    useEffect(() => {
        const storedToken = localStorage.getItem("token");
        if (storedToken) {
            setToken(storedToken);
            const decoded: any = JSON.parse(atob(storedToken.split('.')[1]));
            setAvatar(decoded.avatar);
        }
    }, []);

    const handleLoginSuccess = (avatar: string, token: string) => {
        setAvatar(avatar);
        setToken(token);
        localStorage.setItem("token", token);
        setLoginPopupOpen(false);
    };

    const handleLogout = () => {
        setAvatar(null);
        setToken(null);
        localStorage.removeItem("token");
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
