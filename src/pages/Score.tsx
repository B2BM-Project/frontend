import Login_Comp from "../components/Login_Comp";
import Nav_profile from '../components/Nav_profile.tsx';
import Score_board from '../components/Score_board.tsx';

function Score () {

    return (
        <>
            <Login_Comp/>


            <div className="flex h-screen bg-gray-200 ">
            <Nav_profile />
            <Score_board /> 
            </div>
        </>
    );
};

export default Score;
