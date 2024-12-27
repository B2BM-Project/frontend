import NavBar from '../components/NavBar.tsx'
import Loginpopup from '../components/Loginpopup.tsx';
import Nav_profile from '../components/Nav_profile.tsx';
import Score_board from '../components/Score_board.tsx';
import { useState } from "react";

function Score () {

    const [isLoginOpen, setLoginOpen] = useState(false);

    return (
        <>
            <NavBar onLoginClick={() => setLoginOpen(true)} />
            <Loginpopup isOpen={isLoginOpen} onClose={() => setLoginOpen(false)} />


            <div className="flex h-screen bg-gray-200 ">
            <Nav_profile />
            <Score_board /> 
            </div>
        </>
    );
};

export default Score;
