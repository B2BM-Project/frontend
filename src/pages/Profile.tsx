import Login_Comp from "../components/Login_Comp";
import Nav_profile from '../components/Nav_profile.tsx';
import Main_profile from '../components/Main_profile.tsx';

function Profile () {
    return (
        <>
           <Login_Comp/>

            <div className="flex h-screen bg-gray-200 ">
            <Nav_profile />
            <Main_profile />
            
            </div>
        </>
    );
};

export default Profile;
