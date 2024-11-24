import "./loginpop.css"

function Loginpopup({ isOpen, onClose }) {
    if (!isOpen) return null;
    return (
        <div className="popup-overlay ">
        <div className="popup-content ">
            <h3 className="text-black">Hello!</h3>
            <p className="text-black">Press ESC key or click the button below to close</p>
            <button onClick={onClose}>Close</button>
        </div>
        </div>
    )
}

export default Loginpopup