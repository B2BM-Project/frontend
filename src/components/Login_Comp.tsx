import { useState, useEffect } from "react";
import NavBar from "./NavBar";
import Loginpopup from "./Loginpopup";

function Login_Comp() {
    const [isLoginPopupOpen, setLoginPopupOpen] = useState(false);
    const [avatar, setAvatar] = useState<string | null>(null);
    const [authToken, setAuthToken] = useState<string | null>(null);

    useEffect(() => {
        const storedToken = localStorage.getItem("authToken");
        if (storedToken) {
            setAuthToken(storedToken);
            const decoded: any = JSON.parse(atob(storedToken.split('.')[1]));
            setAvatar(decoded.avatar);
        }
    }, []);

    const handleLoginSuccess = (avatar: string, authToken: string) => {
        setAvatar(avatar);
        setAuthToken(authToken);
        localStorage.setItem("authToken", authToken);
        setLoginPopupOpen(false);
    };

    const handleLogout = () => {
        console.log("Logging out...");
        setAvatar(null);
        setAuthToken(null);
        localStorage.removeItem("authToken");
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
