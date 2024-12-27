import { Link } from "react-router-dom";

function Main_profile() {
    return (
        <main className="flex-1 bg-[#272528] p-4">
                <div className="bg-[#302F31] shadow-lg rounded-lg p-[15px] flex items-center justify-between">
                <div className="flex items-center">
                    {/* Profile Image */}
                    <img
                    src="https://via.placeholder.com/150"
                    alt="Profile"
                    className="rounded-lg w-[150px] h-[150px] object-cover mr-6"
                    />
                    {/* Profile Details */}
                    <div>
                    <h2 className="font-bold mb-2 text-[40px]">John Wick</h2>
                    <p>
                        <span className="text-[24px]">Name for Certificate:</span>{" "}
                    </p>
                    <p>
                        <span className="text-[24px]">E-mail:</span>{" "}
                    </p>
                    <p>
                        <span className="text-[24px]">Member Since:</span> 
                    </p>
                    <p>
                        <span className="text-[24px]">Player Type:</span>
                    </p>
                    </div>
                </div>
                {/* Stats */}
                <div className="text-right">
                    <p className="text-[24px] font-bold">Ranking Level: <span className="text-blue-500 text-[24px] font-bold">999+</span></p>
                    <p className="text-[24px]">Completed Total Challenge:{" "}<span className="text-[24px]">20</span></p>
                    {/* Edit Profile Button */}
                    <Link to="/editprofile" className="btn btn-xs mt-4 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg p-4"> Edit Profile</Link>
                </div>
                </div>
            </main>
    )
}

export default Main_profile