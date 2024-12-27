import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Loginpopup from "./components/Loginpopup";
import Mainpage from "./components/mainpage"

function App() {
    const [isLoginPopupOpen, setLoginPopupOpen] = useState(false);
    const [username, setUsername] = useState<string | null>(null);
    const [token, setToken] = useState<string | null>(null);

    // ตรวจสอบ JWT token ใน localStorage เมื่อ component โหลด
    useEffect(() => {
        const storedToken = localStorage.getItem("token");
        if (storedToken) {
            setToken(storedToken);

            // Decoding token (ถ้าคุณต้องการดึงข้อมูล user ออกมา)
            const decoded: any = JSON.parse(atob(storedToken.split('.')[1])); // Decode JWT token
            setUsername(decoded.username);
        }
    }, []);

    const handleLoginSuccess = (username: string, token: string) => {
        setUsername(username);
        setToken(token);
        localStorage.setItem("token", token); // เก็บ token ใน localStorage
        setLoginPopupOpen(false); // ปิด popup เมื่อ login สำเร็จ
    };

    const handleLogout = () => {
        setUsername(null);
        setToken(null);
        localStorage.removeItem("token"); // ลบ token ออกจาก localStorage
    };

    return (
        <>
        <div>
            {/* ส่งข้อมูลชื่อผู้ใช้, ฟังก์ชันเปิด login popup และฟังก์ชัน logout */}
            <NavBar username={username} onLoginClick={() => setLoginPopupOpen(true)} onLogout={handleLogout} />
            {/* ส่งฟังก์ชัน handleLoginSuccess ไปยัง popup */}
            <Loginpopup isOpen={isLoginPopupOpen} onClose={() => setLoginPopupOpen(false)} onLoginSuccess={handleLoginSuccess} />
            
        </div>

        <Mainpage />
        </>
    );
}

export default App;
