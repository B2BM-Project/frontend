import { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Login_Comp from "../components/Login_Comp";
import TopicPage from '../components/TopicPage';

function Competition() {
  const [rooms, setRooms] = useState([]);
  const navigate = useNavigate(); // สำหรับการนำทาง

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await fetch('http://localhost:3000/rooms/showall');
        const data = await response.json();
        console.log(data); // ดูว่า data ที่ได้มีข้อมูลอะไรบ้าง
        setRooms(data.rooms); 
      } catch (error) {
        console.error('Error fetching rooms:', error);
      }
    };

    fetchRooms(); // เรียกฟังก์ชันเมื่อ component โหลด
  }, []);

  const handleJoinRoom = (roomId) => {
    navigate(`/lobby-room/${roomId}`); // เปลี่ยนเส้นทางไปยังหน้า join room
  };

  return (
    <>
      <Login_Comp />
      <div className='mainContainer'>
        <div className="bgFrame">
          <TopicPage page="Competition" />
          <div>
            <div className="flex justify-between items-center mb-[20px]">
              <label className="input input-xs input-bordered flex items-center gap-2 w-1/2 bg-[#302F31]">
                <input type="text" className="grow" placeholder="Search" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70">
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd" />
                </svg>
              </label>
              <Link to="/create-room" className="btn btn-xs btn-outline btn-error">Create Room</Link>
            </div>
          </div>
          <div className="overflow-x-auto">
              {rooms.length === 0 ? (
                <p>No rooms available.</p>
              ) : (
                <table className="table table-sm w-full">
                  <thead>
                    <tr className="bg-[#F03535] text-[#ffffff]">
                      <th>ID</th>
                      <th>Title</th>
                      <th>Description</th>
                      <th>Password</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rooms.map((room) => (
                      <tr
                        key={room.Room_id}
                        className="cursor-pointer hover:bg-[#F03535]" 
                        onClick={() => handleJoinRoom(room.Room_id)} 
                      >
                        <td>{room.Room_id}</td>
                        <td>{room.Room_name}</td>
                        <td>{room.Room_description || 'N/A'}</td>
                        <td>{room.Room_password || 'N/A'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>

        </div>
      </div>
    </>
  );
}

export default Competition;
