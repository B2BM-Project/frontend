
function Loginpopup({ isOpen, onClose }) {
    return (
        isOpen && (
            <div className="modal modal-open">
                <div className="modal-box">
                <h3 className="font-bold text-lg">Login</h3>
                <p className="py-4">Enter your credentials to access your account.</p>
                
                {/* Login Form */}
                <form className="flex flex-col gap-4">
                    <input type="text" placeholder="Username" className="input input-bordered w-full"/>
                    <input type="password" placeholder="Password" className="input input-bordered w-full"/>
                    <button type="submit" className="btn btn-primary w-full">
                    Login
                    </button>
                </form>
                {/* Close Button */}
                <div className="modal-action">
                    <button className="btn" onClick={onClose}>Close</button>
                </div>
                </div>
            </div>
        )
    );
}

export default Loginpopup