import "../App.css";
import "./CreateRoom.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import Profile from "../components/Profile.tsx";
import { useState, useEffect } from "react";
import Task from "../components/Task.tsx";
import Clock from "../components/Clock.tsx";
import axios, {AxiosError} from "axios";
import { useParams } from "react-router-dom";
import { io } from "socket.io-client";
import {WelcomeRoomModal} from "../components/ConfirmModal.tsx"

const socket = io(`${import.meta.env.VITE_API_URL_SOCKET}`);

interface Room {
  Room_id: string;
  Room_name: string;
  Room_description: string;  
  Room_password: string;  
  duration : string;   
  owner : string;
}
interface User {
  user_id: string;
  username: string;
  profile_img: string;
  display_name: string;
  ready_status: boolean; // ใช้กับ userInRoom
}
interface task {
  Task_id: number;
  Task_title: string;
  Task_description: string;
  Task_file: string;
  score: string;
}

function Lobby() {
  const { id } = useParams(); // รับค่า id จาก URL
  const [room, setRoom] = useState<Room>();
  const [task, setTask] = useState<task[]>([]); //Array for map function
  const [user, setUser] = useState<User>(); //user ที่ล็อคอิน ดึง token localStorage
  const [userInRoom, setUserInRoom] = useState<User[]>([]); //user ที่อยู่ในห้อง
  const [isReady, setIsReady] = useState(false); // สถานะ Ready หรือ Unready
  // Handle Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
       // ฟัง event เมื่อผู้ใช้งานคนอื่นเข้าร่วมห้อง
    socket.on("user_joined", (data) => { //data.user[0]
      setUserInRoom(data.user)
      // console.log(`${data?.user[0].username} joined/leave room ${data.roomId}`); //ถ้าไม่มี index จะ error
    });
    // ฟัง event เมื่อสถานะของผู้ใช้งานเปลี่ยน
    socket.on("update_ready_status", (payload) => {
      if (payload && payload.user) {
        setUserInRoom(payload.user); // อัปเดตสถานะผู้ใช้ในห้อง
      } else {
        console.error("Invalid payload received:", payload);
      }
    });
  }, []);

  // เข้าร่วมห้อง
  const joinRoom = async () => {
    if (room) {
      socket.emit("join_room", room?.Room_id, user);
    }
    closeModal();
  };
  const exitRoom = async () => {
    if (room) {
      socket.emit("leave_room", room?.Room_id, user);
    }
    alert(`${user?.username} : exit room ${room?.Room_id}`);
  };
  // เปลี่ยนสถานะ Ready หรือ Unready
  const toggleReadyStatus = () => {
    setIsReady(!isReady);
    socket.emit("set_ready_status", {
      roomId : room?.Room_id,
      user: user,
      status: !isReady,
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // เรียก API แรก
        const roomResponse = await axios.get(
          `${import.meta.env.VITE_API_URL}/rooms/${id}/tasks`
        );
        await setRoom(roomResponse.data.rooms[0]);
        await setTask(roomResponse.data.tasks);
        await setDurationTime(roomResponse.data.rooms[0].duration);
        // await console.log("Room:", room);
        // await console.log("Task:", task);
        // ใช้ข้อมูลจาก API แรกใน API ที่สอง
        const userResponse = await axios.get(
          `${import.meta.env.VITE_API_URL}/user/me`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("authToken")}`,
            },
          }
        );
        await setUser(userResponse.data.user);
        {openModal()}

        // await console.log("User:", user);
      } catch (error) {
        const axiosError = error as AxiosError;
        console.error("Error fetching data:", axiosError);
      }
    };
    fetchData();
  }, [id]); // เปลี่ยนแค่เมื่อ id เปลี่ยน

  const [visible, setVisible] = useState(false);
  const [startTime, setStartTime] = useState(false); // ใช้ state ควบคุมการเริ่มจับเวลา
  const [DurationTime, setDurationTime] = useState(room?.duration); // ตั้งค่าเวลาเริ่มต้น (0 ชั่วโมง)

  const handleStartTime = () => setStartTime(true); // เริ่มนับถอยหลัง
  // const handleStopTime = () => setStartTime(false); // หยุดการนับถอยหลัง
  // const handleResetTime = () => {
  //   setStartTime(false); // หยุดการจับเวลา
  //   setDurationTime("1800"); // รีเซ็ตเวลาเป็นค่าเริ่มต้น
  // };
  return (
    <>
    <WelcomeRoomModal
            isOpen={isModalOpen}
            onClose={closeModal}
            title="Welcome"
            message="Welcome to the competition room! Prepare yourself for an exciting challenge. Good luck and enjoy"
            onConfirm={joinRoom}
          />
      <div className="mainContainer2">
        {/* Left Tab */}
        <div className="mainContainer2-left">
          {/* show logo web */}
          <div className="leftFrame-logo">
            <Link to="/">
              <img className="logoImg" src={logo} alt="logo" />
            </Link>
          </div>
          {/* show user's attendance */}
          <div className="leftFrame-profile overflow-auto max-h-40">
            {userInRoom.map((data) => (
              <Profile
                key={data.user_id}
                img="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                name={data.username}
                owner={room?.owner == data.user_id ? true : false} //isTrue = Crown Icon
                ready={data.ready_status ?? false} 
              />
            ))}
          </div>
          {/* show button ready, start */}
          <div className="lobby-btn">
            <button className="btn-black" onClick={toggleReadyStatus}>
              Ready
            </button>
            <button className="btn-red " onClick={handleStartTime}>
              Start
            </button>
          </div>
        </div>
        {/* Right Tab */}
        <div className="mainContainer2-right">
          {/* Top Tab */}
          <div className="topFrame sticky top-0 z-50">
            {/* Room description */}
            <div className="top-left-tab">
              <p>Room ID: {room?.Room_id}</p>
              <p id="room-name">Name: {room?.Room_name}</p>
              {room && room?.Room_password != null && (
                <>
                  <p>
                    Pass:{" "}
                    {visible
                      ? room?.Room_password
                      : "*".repeat(room?.Room_password.length)}
                  </p>
                  <div onClick={() => setVisible(!visible)}>
                    {visible ? (
                      <i className="fa-solid fa-eye"></i>
                    ) : (
                      <i className="fa-solid fa-eye-slash"></i>
                    )}
                  </div>
                </>
              )}
            </div>
            {/* Profile */}
            <div className="top-right-tab">
              <div className="room-profile-container">
                <div className="avatar">
                  <div className="w-5 rounded-full">
                    <img
                      src={
                        user?.profile_img == null
                          ? "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                          : user?.profile_img
                      }
                    />
                  </div>
                </div>
                <div id="user-name">
                  <p id="user-name-1">{user?.display_name}</p>
                  <p id="user-name-2">@{user?.username}</p>
                </div>
              </div>
              {/* setting, exit Icon */}
              <div className="room-setting-container">
                <div className="gear-icon">
                  <i className="fa-solid fa-gear fa-xs"></i>
                </div>
                <div className="exit-icon" onClick={exitRoom}>
                  <i className="fa-solid fa-right-from-bracket fa-xs" ></i>
                </div>
              </div>
            </div>
          </div>
          {/* Content section */}
          <h2 className="text-center text-lg">Lobby</h2>
          <Clock
            key={DurationTime}
            initialTime={DurationTime ? parseInt(DurationTime, 10) : 0} // แปลงค่า DurationTime เป็น number ฐาน10 หรือใช้ 0 ถ้าเป็น undefined
            start={startTime} //boolean
          />
          {task.map((data, index) => {
            return (
              <Task
                key={data.Task_id}
                task_num={`Task Details : ${index + 1}`}
                task_title={data.Task_title}
                task_des={data.Task_description}
                task_ip="http://localhost:5173/lobby-room"
                task_file={[data.Task_file]}
                task_score={data.score}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Lobby;
