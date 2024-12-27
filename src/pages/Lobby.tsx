import "../App.css"
import "./CreateRoom.css"
import logo from '../assets/logo.png'
import { Link } from "react-router-dom";
import Profile from "../components/Profile.tsx";
import { useState } from "react";
import Profile2 from "../components/Profile2.tsx";
import Clock from "../components/Clock.tsx";

function Lobby() {
  const [visible, setVisible] = useState(false);
  const [startTime, setStartTime] = useState(false); // ใช้ state ควบคุมการเริ่มจับเวลา
  const [DurationTime, setDurationTime] = useState(1); // ตั้งค่าเวลาเริ่มต้น (1 ชั่วโมง)

  const handleStartTime = () => setStartTime(true); // เริ่มนับถอยหลัง
  const handleStopTime = () => setStartTime(false); // หยุดการนับถอยหลัง
  const handleResetTime = () => {
    setStartTime(false); // หยุดการจับเวลา
    setDurationTime(3600); // รีเซ็ตเวลาเป็นค่าเริ่มต้น
  };

  return (
    <>
      <div className="mainContainer2">
        {/* Left Tab */}
        <div className="mainContainer2-left">
          {/* show logo web */}
          <div className="leftFrame-logo">
            <Link to = '/'>
            <img className="logoImg" src={logo} alt="logo" />
            </Link>
          </div>
          {/* show user's attendance */}
          <div className="leftFrame-profile overflow-auto max-h-40">
              <Profile img="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" 
              name="John Wick" 
              owner={true} //Crown Icon
              ready={false}/>
              <Profile img="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" 
              name="Liam miamy" 
              owner={false}
              ready={true} />
              <Profile img="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" 
              name="Janny wills" 
              owner={false}
              ready={false} />
              <Profile img="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" 
              name="Luis Dan" 
              owner={false}
              ready={true} />
              <Profile img="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" 
              name="Luis Dan" 
              owner={false}
              ready={true} />
              <Profile img="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" 
              name="Luis Dan" 
              owner={false}
              ready={true} />
              <Profile img="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" 
              name="Luis Dan" 
              owner={false}
              ready={true} />
              <Profile img="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" 
              name="Luis Dan" 
              owner={false}
              ready={true} />
              <Profile img="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" 
              name="Luis Dan" 
              owner={false}
              ready={true} />
            
          </div>
          {/* show button ready, start */}
          <div className="lobby-btn">
            <button className="btn-black">Ready</button>
            <button className="btn-red" onClick={handleStartTime}>Start</button>
          </div>
        </div>
      {/* Right Tab */}
        <div className="mainContainer2-right">
          {/* Top Tab */}
          <div className="topFrame">
            {/* Room description */}
            <div className="top-left-tab">
              <p>Room ID: 10001 </p>
              <p id="room-name">Name: CTF Contest Challenge</p>
              <p>Pass: {visible ? "123456":"******"} </p>
              <div onClick={() => setVisible(!visible)}>
                {visible ? <i className="fa-solid fa-eye"></i> : <i className="fa-solid fa-eye-slash"></i>}
              </div>
            </div>
            {/* Profile */}
            <div className="top-right-tab">
              <div className="room-profile-container">
                <div className="avatar">
                  <div className="w-5 rounded-full">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                  </div>
                </div>  
                  <div id="user-name">
                    <p id="user-name-1">John Wick</p>
                    <p id="user-name-2">@JW_Inwza007</p>
                  </div>
              </div>
              {/* setting, exit Icon */}
              <div className="room-setting-container">
                <div className="gear-icon">
                  <i className="fa-solid fa-gear fa-xs"></i>
                </div>
                <div className="exit-icon">
                  <i className="fa-solid fa-right-from-bracket fa-xs"></i>
                </div>
              </div>
            </div>
          </div> 
          {/* Content section */}
            <Clock initialTime={DurationTime} start={startTime} />
          <Profile2 task_num="Task Details 1"
          task_title="CTF Contest Challenge"
          task_des="Room for hacking contest"
          task_ip="http://localhost:5173/lobby-room"
          task_file="Download File"
          task_score="30"
          />
          <Profile2 task_num="Task Details 2"
          task_title="CTF Contest Challenge"
          task_des="Room for hacking contest"
          task_ip="http://localhost:5173/lobby-room"
          task_file="Download File"
          task_score="10"
          />

        </div>
      </div>
    </>
  )
}

export default Lobby
