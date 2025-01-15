import { useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Loginpopup({ isOpen, onClose, onLoginSuccess }: { isOpen: any, onClose: any, onLoginSuccess: any }) {
    const [isSignupOpen, setSignupOpen] = useState(false);
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        email: "",
        firstName: "",
        lastName: "",
        confirmPassword: ""
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    async function handleFormSubmit(type: string) {
        const url = type === "login" ? `${import.meta.env.VITE_API_URL}/login` : `${import.meta.env.VITE_API_URL}/register`;
        const data =
            type === "login"
                ? { username: formData.username, password: formData.password }
                : {
                    username: formData.username,
                    password: formData.password,
                    email: formData.email,
                };

        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        const result = await response.json();

        if (response.ok) {
            alert(`${type} successful!`);
            if (type === "login") {
                localStorage.setItem("authToken", result.token);

                // Call onLoginSuccess with username and token after login
                onLoginSuccess(formData.username, result.token);
            }
        } else {
            alert(result.message || `${type} failed`);
        }
    }

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
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>

                    {isSignupOpen ? (
                        <>
                            <button
                                className="font-bold text-lg text-[#ffffff] w-1/2 bg-[#D2CCCC] hover:bg-[#888383] rounded-l-lg p-[10px]"
                                onClick={() => setSignupOpen(false)}
                            >
                                Sign Up
                            </button>
                            <button
                                className="font-bold text-lg text-[#ffffff] w-1/2 bg-[#F03535] hover:bg-[#952020] rounded-r-lg p-[10px] btn-disabled"
                            >
                                Login
                            </button>
                            <form
                                className="flex flex-col gap-4 mt-[50px]"
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    handleFormSubmit("login");
                                }}
                            >
                                <label className="input input-bordered flex items-center gap-2  bg-[#302F31]">
                                    <input
                                        type="text"
                                        className="grow"
                                        placeholder="Username"
                                        name="username"
                                        value={formData.username}
                                        onChange={handleInputChange}
                                    />
                                </label>

                                <label className="input input-bordered flex items-center gap-2 bg-[#302F31]">
                                    <input
                                        type="password"
                                        className="grow"
                                        placeholder="Password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleInputChange}
                                    />
                                </label>
                                <button type="submit" className="btn btn-error w-full text-[#ffffff] border-black border-[3px] rounded-[15px] font-bold text-[42px] mt-[40px]">
                                    Log in
                                </button>
                            </form>
                        </>
                    ) : (
                        <>
                            <button
                                className="font-bold text-lg text-[#ffffff] w-1/2 bg-[#F03535] hover:bg-[#952020] rounded-l-lg p-[10px] btn-disabled"
                            >
                                Sign Up
                            </button>
                            <button
                                className="font-bold text-lg text-[#ffffff] w-1/2 bg-[#D2CCCC] hover:bg-[#888383] rounded-r-lg p-[10px]"
                                onClick={() => setSignupOpen(true)}
                            >
                                Login
                            </button>
                            <form
                                className="flex flex-col gap-4 mt-[50px]"
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    handleFormSubmit("register");
                                }}
                            >
                                <label className="form-control w-full bg-[#302F31]">
                                    <input
                                        type="text"
                                        placeholder="Username"
                                        className="input input-bordered bg-[#302F31]"
                                        name="username"
                                        value={formData.username}
                                        onChange={handleInputChange}
                                    />
                                </label>
                                <label className="form-control w-full bg-[#302F31]">
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="input input-bordered bg-[#302F31]"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                    />
                                </label>
                                <label className="form-control w-full bg-[#302F31]">
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        className="input input-bordered bg-[#302F31]"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleInputChange}
                                    />
                                </label>
                                <label className="form-control w-full bg-[#302F31]">
                                    <input
                                        type="password"
                                        placeholder="Confirm Password"
                                        className="input input-bordered bg-[#302F31]"
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleInputChange}
                                    />
                                </label>
                                <button
                                    type="submit"
                                    className="btn btn-error w-full text-[#ffffff] border-black border-[3px] rounded-[15px] font-bold text-[42px] mt-[40px]"
                                >
                                    Register
                                </button>
                            </form>
                        </>
                    )}
                </div>
            </div>
        )
    );
}

export default Loginpopup;
