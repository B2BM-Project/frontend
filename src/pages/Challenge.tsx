import NavBar from '../components/NavBar.tsx'
import Loginpopup from '../components/Loginpopup.tsx';
import { useState } from "react";
import TopicPage from '../components/TopicPage'
import SliderCard from '../components/SliderCard'
import "./Challenge.css"
// import axios from 'axios';
// import { useState, useEffect } from 'react';

function Challenge() {
  const [isLoginOpen, setLoginOpen] = useState(false);

//   const [data, setData] = useState([]);
//   useEffect(() =>{
//     axios.get('')
//     .then(res =>{
//         console.log(res)
//     }).catch(err => {
//         console.log(err)
//     })
// }, [])

  return (
    <>
        <NavBar onLoginClick={() => setLoginOpen(true)} />
        <Loginpopup isOpen={isLoginOpen} onClose={() => setLoginOpen(false)} />

        <div className="mainContainer">
            <div className="bgFrame">
              <TopicPage page="Challenge" />
              <SliderCard category="Beginner"/>
              <SliderCard category="Web"/>
              <SliderCard category="pwn"/>
              <SliderCard category="Crypto"/>
            </div>
        </div> 
    </>
  )
}

export default Challenge
