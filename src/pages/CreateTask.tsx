import NavBar from "../components/NavBar"
import TopicPage from '../components/TopicPage.tsx';
import "../App.css"
import "./CreateRoom.css"
import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function CreateTask() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("1");
  const [file, setFile] = useState("");
  const [link, setLink] = useState(""); 
  const navigate = useNavigate(); // ใช้ navigate เพื่อเปลี่ยนหน้า

  // function for upload file
  const upload = () => {
    if (!file || file.length === 0) {
      console.error("No files selected.");
      return;
    }
    if (file.length > 2) {
      alert('You can only upload up to 2 files.');
      return setFile("");;
    }
    const uploadData = new FormData();
    for (let i = 0; i < file.length; i++) {
      uploadData.append(`multiFile`, file[i]);
    }
    axios.post('http://localhost:3000/upload', uploadData)
        .then((res) => {
            console.log("Upload successful:", res.data);
            alert("Files uploaded successfully!");
            // Redirect to Lobby Page
            navigate('/lobby-room');
        })
        .catch((error) => {
            console.error("Error uploading files:", error);
            alert("Failed to upload files.");
        });
  }
  // function for submit form
  const handleSave = async (e) => {
    e.preventDefault();
    const submitData = {
        title,
        description,
        duration,
        file,
        link,
    };
    try {
      await upload();
      console.log("Submit Data:", submitData);
    } catch (err) {
      console.error(err);
      alert("An error occurred while submitting the form.");
    }
    // Reset form DOM
    e.target.reset();
    // Reset state
    setTitle("");
    setDescription("");
    setDuration("1");
    setFile("");
    setLink("");
    
};
return (
    <>
      <NavBar onLoginClick={() => setLoginOpen(true)} />
      <div className="mainContainer">
        <div className="bgFrame">
          <TopicPage page="Create Task"></TopicPage>
          <form onSubmit={handleSave}>
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
              {/* select radio button */}
              {/* <div className="type-container">
                <label>Type :</label>
                <label className="radioInput">
                  <input className="radioInput" type="radio" id="vm" name="type_task" value="vm"/>
                  VM
                </label>
                <label className="radioInput">
                  <input className="radioInput" type="radio" id="file" name="type_task" value="file"/>
                  Upload File
                </label>
              </div> */}
            </div>
            {/* Input IP Address */}
            <div className="input-container">
              <label>Input IP Address</label>
              <input className='text-box' type="text" placeholder='example : http://localhost:5173/create-task' value={link} onChange={(e) => setLink(e.target.value)} />
            </div>
            {/* Upload file */}
            <div className="input-container">
                  <label>Upload File</label>
                  <input type="file" name="multiFile" id="input-file" className="file-input file-input-bordered file-input-xs w-full max-w-full file-input-neutral" onChange={(e) => setFile(e.target.files)} multiple />
                  <div className="label">
                    <span className="label-text-alt"></span>
                    <span className="label-text-alt">Limit 2 files upload</span>
                  </div>
              </div>
            
            {/* Submit Button */}
            <div className="button-container">
            <button className="btn-black" type="button"><i className="fa-solid fa-xmark"></i>Cancel</button>
            <button className="btn-red" type="submit"><i className="fa-solid fa-floppy-disk"></i> Save</button>
            </div>  
          </form>
        </div>

      </div>
    </>
  )
}

export default CreateTask
