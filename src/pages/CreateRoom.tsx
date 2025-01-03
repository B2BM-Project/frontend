import NavBar from '../components/NavBar.tsx'
import TopicPage from '../components/TopicPage.tsx';
import { useState } from "react";
import "./CreateRoom.css"
import "@fortawesome/fontawesome-free/css/all.min.css";

function CreateRoom() {
const [title, setTitle] = useState("");
const [description, setDescription] = useState("");
const [duration, setDuration] = useState("1");
const [usePassword, setUsePassword] = useState(false);
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");
const [visible, setVisible] = useState(false);
const [visible2, setVisible2] = useState(false);
const [error, setError] = useState("");

const handleSubmit = (e) => {
    e.preventDefault();
    if (usePassword && password !== confirmPassword) {
        setError("Passwords do not match !!!");
        return;
    }
    setError("");
    const formData = {
        title,
        description,
        duration,
        password: usePassword ? password : null,
    };
    console.log("Form Data:", formData);
    alert("submitted Goto Lobby Page")
    // ส่งข้อมูลไปยัง backend หรือดำเนินการอื่น เช่น reset form data
    // setTitle("");
    // setDescription("");
    // setDuration("1");
    // setUsePassword(false);
    // setPassword("");
    // setConfirmPassword("");
    // setVisible(false);
    // setVisible2(false);

};

return (
    <>
                <NavBar onLoginClick={() => setLoginOpen(true)} />
                    {/* <Loginpopup isOpen={isLoginOpen} onClose={() => setLoginOpen(false)} /> */}

                    <div className="mainContainer">
                        <div className="bgFrame">
                            <TopicPage page="Create Room" />

                            <form onSubmit={handleSubmit}>
                                {/* Title Input  */}
                                <div className='input-container'>
                                    <label>Title</label>
                                    <input className='text-box' type="text" placeholder='CTF Contest Challenge' value={title} onChange={(e) => setTitle(e.target.value)} required/>
                                </div>
                                {/* Description Input  */}
                                <div className='input-container'>
                                    <label>Description</label>
                                    <textarea className='textarea-box' placeholder='Room for hacking contest...'
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    required
                                    ></textarea>
                                </div>
                                {/* Duration select element */}
                                <div className='input-container2'>
                                    <div className="select-input">
                                        <label>Duration :</label>
                                        <select className="timeSelect" defaultValue={duration} onChange={e => setDuration(e.target.value)}>
                                        <option value="1">1 Hour</option>
                                        <option value="2">2 Hours</option>
                                        <option value="3">3 Hours</option>
                                        </select>
                                    </div>
                                </div>
                                {/* Password Check Box  */}
                                <div className='input-container'>
                                    <label>
                                    <input className='check-box' 
                                        type="checkbox"
                                        checked={usePassword}
                                        onChange={(e) => setUsePassword(e.target.checked)}
                                    />
                                    Use Password
                                    </label>
                                </div>
                                {/* Show/Hide Input Password */}
                                {usePassword && (
                                    <>
                                    <div className='input-container'>
                                        <label>Password</label>
                                        <div className='togglePwd' onClick={() => setVisible(!visible)}>
                                            {visible ? <i className="fa-solid fa-eye"></i> : <i className="fa-solid fa-eye-slash"></i>}
                                        </div>
                                        <input className='text-box' placeholder='Password' maxLength={6}
                                        type={visible ? "text":"password"}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                        />
                                    </div>

                                    <div className='input-container'>
                                        <label>Confirm Password</label>
                                            {/* Toggle Show/Hide Password  */}
                                            <div className='togglePwd'>
                                                {visible2 ? <i onClick={() => setVisible2(!visible2)} className="fa-solid fa-eye"></i> : <i onClick={() => setVisible2(!visible2)} className="fa-solid fa-eye-slash"></i>}
                                            </div>
                                            <input className='text-box' placeholder='Confirm Password' maxLength={6}
                                            type={visible2 ? "text":"password"}
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                            required
                                            />
                                    </div>
                                    </>
                                )}
                                {/* check error password not match */}
                                {error && <p style={{ color: "red"}}>{error}</p>}
                                {/* Create/Cancel Button  */}
                                <div className="button-container">
                                    <button className="btn-black" type="button"><i className="fa-solid fa-xmark"></i>Cancel</button>
                                    <button className="btn-red" type="submit"><i className="fa-solid fa-floppy-disk"></i> Create</button>
                                    
                                </div>
                </form>
            </div>
        </div>  
    </>
    )
}

export default CreateRoom
