/* eslint-disable react-hooks/exhaustive-deps */
import NavBar from "../components/NavBar.tsx";
import TopicPage from "../components/TopicPage.tsx";
import { useState,useEffect } from "react";
import "./CreateRoom.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import axios from "axios";
import ConfirmModal from "../components/ConfirmModal.js";
import { useNavigate } from 'react-router-dom';

function CreateRoom() {
  // form data
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("1");
  const [usePassword, setUsePassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // toggle password
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [error, setError] = useState("");
  // Handle Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  // navigate Link
  const navigate = useNavigate();

    // ใช้ useEffect เพื่อตรวจสอบเมื่อ confirmPassword เปลี่ยนแปลง
    useEffect(() => {
      if (usePassword && password !== confirmPassword) {
        setError('Passwords do not match !!!');
      } else {
        setError(''); // รีเซ็ต error หาก password ตรงกัน
      }
    }, [confirmPassword]);

  const handleSubmit = async (e) => {
    e.preventDefault(); // ป้องกันหน้ารีเฟรช
    setError('');
    const formData = {
      Room_name: title,
      Room_description: description,
      Room_password: usePassword ? password : null,
      status: 0,
      duration: duration,
    };
    // ดึง token จาก localStorage
    const token = localStorage.getItem("authToken"); // หรือจะใช้วิธีเก็บใน context ก็ได้
    try {
      console.log("authToken", token);
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/rooms`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`, // ส่ง token ใน header
          },
        }
      );
      console.log("Room created:", response.data);
      console.log("roomID:", response.data.roomId, "roomToken:", response.data.roomToken);
      localStorage.setItem(`room${response.data.roomId}Token`,response.data.roomToken)
      alert("Room created successfully!");
      closeModal();
      navigate(`/lobby-room/${response.data.roomId}`);
    } catch (error) {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
      alert("Error creating room");
    }
    // console.log("Form Data:", formData);
    // alert("submitted Goto Lobby Page");
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
  const handleModal = (e) => {
    e.preventDefault(); // ป้องกันหน้ารีเฟรช
    if (error) return; // ป้องกันไม่ให้เปิด modal หากมี error
    openModal(); // เปิด modal
  };

  return (
    <>
      <NavBar onLoginClick={() => setLoginOpen(true)} />
      {/* <Loginpopup isOpen={isLoginOpen} onClose={() => setLoginOpen(false)} /> */}

      <div className="mainContainer">
        <div className="bgFrame">
          <TopicPage page="Create Room" />

          {/* <form onSubmit={handleSubmit}> */}
          <form onSubmit={openModal}>
            {/* Title Input  */}
            <div className="input-container">
              <label>Title</label>
              <input
                className="text-box"
                type="text"
                placeholder="CTF Contest Challenge"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            {/* Description Input  */}
            <div className="input-container">
              <label>Description</label>
              <textarea
                className="textarea-box"
                placeholder="Room for hacking contest..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              ></textarea>
            </div>
            {/* Duration select element */}
            <div className="input-container2">
              <div className="select-input">
                <label>Duration :</label>
                <select
                  className="timeSelect"
                  defaultValue={duration}
                  onChange={(e) => setDuration(e.target.value)}
                >
                  <option value="1">1 Hour</option>
                  <option value="2">2 Hours</option>
                  <option value="3">3 Hours</option>
                </select>
              </div>
            </div>
            {/* Password Check Box  */}
            <div className="input-container">
              <label>
                <input
                  className="check-box"
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
                <div className="input-container">
                  <label>Password</label>
                  <div
                    className="togglePwd"
                    onClick={() => setVisible(!visible)}
                  >
                    {visible ? (
                      <i className="fa-solid fa-eye"></i>
                    ) : (
                      <i className="fa-solid fa-eye-slash"></i>
                    )}
                  </div>
                  <input
                    className="text-box"
                    placeholder="Password"
                    maxLength={6}
                    type={visible ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <div className="input-container">
                  <label>Confirm Password</label>
                  {/* Toggle Show/Hide Password  */}
                  <div className="togglePwd">
                    {visible2 ? (
                      <i
                        onClick={() => setVisible2(!visible2)}
                        className="fa-solid fa-eye"
                      ></i>
                    ) : (
                      <i
                        onClick={() => setVisible2(!visible2)}
                        className="fa-solid fa-eye-slash"
                      ></i>
                    )}
                  </div>
                  <input
                    className="text-box"
                    placeholder="Confirm Password"
                    maxLength={6}
                    type={visible2 ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
              </>
            )}
            {/* check error password not match */}
            {error && <p style={{ color: "red" }}>{error}</p>}
            {/* Create/Cancel Button  */}
            <div className="button-container">
              <button className="btn-black" type="button">
                <i className="fa-solid fa-xmark"></i>Cancel
              </button>
              <button className="btn-red" onClick={handleModal}>
                <i className="fa-solid fa-floppy-disk"></i> Create
              </button>
            </div>
          </form>
          <ConfirmModal
            isOpen={isModalOpen}
            onClose={closeModal}
            title="คุณแน่ใจแล้วใช่มั้ยยย"
            message="Press ESC key or click the button below to close"
            onConfirm={handleSubmit}
          />
        </div>
      </div>
    </>
  );
}

export default CreateRoom;
