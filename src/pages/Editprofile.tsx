import Nav_profile from '../components/Nav_profile.tsx';
import Edit_profile from '../components/Edit_profile.tsx';
import { useState } from "react";
import Login_Comp from "../components/Login_Comp";

function Editprofile () {

    const [isLoginOpen, setLoginOpen] = useState(false);

    return (
        <>
            <Login_Comp/>

            <div className="flex h-screen bg-gray-200 ">
            <Nav_profile />
            <Edit_profile />
            </div>
        </>
    );
};

export default Editprofile;
