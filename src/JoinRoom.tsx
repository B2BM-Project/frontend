import { useEffect, useState } from "react";
import socket from "./config/Socket";

const JoinRoom = () => {
  const [username, setUsername] = useState("");
  const [users, setUsers] = useState([]);
  const [inRoom, setInRoom] = useState(false); // เช็คสถานะว่าผู้ใช้เข้าร่วมห้องหรือยัง

  useEffect(() => {
    // รับข้อมูลผู้ใช้ที่อัปเดตจากเซิร์ฟเวอร์
    socket.on("update_users", (updatedUsers) => {
      setUsers(updatedUsers);
    });

    // ทำความสะอาดเมื่อคอมโพเนนต์ถูกถอดออก
    return () => {
      socket.off("update_users");
    };
  }, []);

  const joinRoom = () => {
    if (username) {
      try {
        socket.emit("join_room", username); // ส่งชื่อผู้ใช้ไปที่เซิร์ฟเวอร์
        setInRoom(true); // อัปเดตสถานะว่าอยู่ในห้อง
      } catch (error) {
        console.log("error:", error);
      }
    }
  };

  const exitRoom = () => {
    try {
      socket.emit("leave_room", username); // แจ้งเซิร์ฟเวอร์ว่าผู้ใช้ออกจากห้อง
      setInRoom(false); // อัปเดตสถานะว่าออกจากห้องแล้ว
      setUsername(""); // ล้างชื่อผู้ใช้
    } catch (error) {
      console.log("error:", error);
    }
  };

  return (
    <div>
      <h1>Room</h1>
      {!inRoom ? (
        <div>
          <input
            className="text-black"
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button className="bg-red-800 hover:bg-red-500" onClick={joinRoom}>
            Join Room
          </button>
        </div>
      ) : (
        <div>
          <button className="bg-gray-800 hover:bg-gray-500" onClick={exitRoom}>
            Exit Room
          </button>
        </div>
      )}
      <h2>Users in Room:</h2>
      <ul>
        {users.map((user) => (
          <li className="text-red" key={user.id}>
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JoinRoom;
