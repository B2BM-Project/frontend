import { Link } from "react-router-dom";

function Nav_profile() {
    return (
        <aside className="bg-[#302F31] text-white w-1/4 p-6 flex flex-col justify-between">
                    <div>
                    <div className="text-center">
                        {/* Profile Picture */}
                        <img
                            src="https://via.placeholder.com/100"
                            alt="Profile"
                            className="rounded-full mx-auto mb-4 w-24 h-24 object-cover"
                        />
                        {/* Profile Name */}
                        <p className="text-[36px] font-bold">John Wick</p>
                        <p className="text-gray-400 text-[24px]">@JW_Inwza007</p>
                    </div>
                    {/* Sidebar Menu */}
                    <div className="mt-8">
                        <div>
                            <Link to="/profile" className="py-2 px-4 text-lg bg-[#D9D9D9] rounded-md mb-8 hover:bg-gray-600 w-full"> Account </Link>
                        </div>
                        <br />
                        <div>
                            <Link to="/score" className="py-2 px-4 text-lg hover:bg-gray-700 rounded-md"> Score Board </Link>
                        </div>
                    </div>
                    </div>
                    {/* Logo */}
                    <div className="text-center text-2xl font-bold">
                    <span className="text-red-500">D2BM</span> <span>CTF</span>
                    </div>
                </aside>
    )
}

export default Nav_profile