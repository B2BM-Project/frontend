import { useState } from "react";

function Loginpopup({ isOpen, onClose} : {isOpen:any, onClose:any}) {

    const [isSignupOpen, setSignupOpen] = useState(false)

    return (
        isOpen && (
            <div className="modal modal-open">
                <div className="modal-box bg-[#302F31] pt-[20px]">
                <div className="flex justify-end">
                    <button className="" onClick={onClose}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-[36px] w-[36px]"
                            fill="none"
                            viewBox="0 0 28 28"
                            stroke="currentColor">
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                

                    <div className="mt-[10px]">
                    </div>

                {isSignupOpen ? (
                    <>
                        <button className="font-bold text-lg text-[#ffffff] w-1/2 bg-[#D2CCCC] hover:bg-[#888383] rounded-l-lg p-[10px]" onClick={() => setSignupOpen(false)}>Sign Up</button>
                        <button className="font-bold text-lg text-[#ffffff] w-1/2 bg-[#F03535] hover:bg-[#952020] rounded-r-lg p-[10px] btn-disabled">Login</button>
                        <form className="flex flex-col gap-4 mt-[50px]" method="POST">
                        <label className="input input-bordered flex items-center gap-2  bg-[#302F31]">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                            d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                        </svg>
                        <input type="text" className="grow" placeholder="Username" id={"username"}/>
                        </label>

                        <label className="input input-bordered flex items-center gap-2 bg-[#302F31]">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                            fillRule="evenodd"
                            d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                            clipRule="evenodd" />
                        </svg>
                        <input type="password" className="grow" placeholder="Password" id={"password"}/>

                        
                        </label>
                            <button type="submit" className="btn btn-error w-full text-[#ffffff] border-black border-[3px] rounded-[15px] font-bold text-[42px] mt-[40px]">
                            Log in
                            </button>
                        </form>
                    </>
                ) : (
                    <>
                        <button className="font-bold text-lg text-[#ffffff] w-1/2 bg-[#F03535] hover:bg-[#952020] rounded-l-lg p-[10px] btn-disabled">Sign Up</button>
                        <button className="font-bold text-lg text-[#ffffff] w-1/2 bg-[#D2CCCC] hover:bg-[#888383] rounded-r-lg p-[10px]" onClick={() => setSignupOpen(true)}>Login</button>
                        <form className="flex flex-col gap-4 mt-[50px]" method="POST">
                        <div className="flex justify-between">
                            <label className="form-control w-full max-w-xs bg-[#302F31] mr-[20px]">
                                <div className="label">
                                    <span className="label-text">First Name</span>
                                </div>
                                <input type="text" placeholder="First Name" className="input input-sm input-bordered input-error w-full max-w-xs bg-[#302F31]" />
                            </label>
                            <label className="form-control w-full max-w-xs bg-[#302F31]">
                                <div className="label">
                                    <span className="label-text">Last Name</span>
                                </div>
                                <input type="text" placeholder="Last Name" className="input input-sm input-bordered input-error w-full max-w-xs bg-[#302F31]" />
                            </label>
                        </div>

                        <label className="form-control w-full max-w-xs bg-[#302F31]">
                            <div className="label">
                                <span className="label-text">Username</span>
                            </div>
                                <input type="text" placeholder="Username" className="input input-sm input-bordered input-error w-full max-w-xs bg-[#302F31]" />
                        </label>
                        <label className="form-control w-full max-w-xs bg-[#302F31]">
                            <div className="label">
                                <span className="label-text">E-mail</span>
                            </div>
                                <input type="email" placeholder="E-mail" className="input input-sm input-bordered input-error w-full max-w-xs bg-[#302F31]" />
                        </label>
                        <label className="form-control w-full max-w-xs bg-[#302F31]">
                            <div className="label">
                                <span className="label-text">Password</span>
                            </div>
                                <input type="password" placeholder="Password" className="input input-sm input-bordered input-error w-full max-w-xs bg-[#302F31]" />
                        </label>
                        <label className="form-control w-full max-w-xs bg-[#302F31]">
                            <div className="label">
                                <span className="label-text">Confirm Password</span>
                            </div>
                                <input type="password" placeholder="Confirm Password" className="input input-sm input-bordered input-error w-full max-w-xs bg-[#302F31]" />
                        </label>

                            <button type="submit" className="btn btn-error w-full text-[#ffffff] border-black border-[3px] rounded-[15px] font-bold text-[42px] mt-[40px]">
                            Sign In
                            </button>
                        </form>
                    </>
                )}
                </div>
            </div>
        )
    );
}

export default Loginpopup