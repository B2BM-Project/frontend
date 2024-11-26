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
              <SliderCard category="Beginner" title="" description="" img_path="" route_path=""/>
              <SliderCard category="Web" title="" description="" img_path="" route_path=""/>
              <SliderCard category="pwn" title="" description="" img_path="" route_path=""/>
              <SliderCard category="Crypto" title="" description="" img_path="" route_path=""/>
            </div>
        </div> 
    </>
  )
}

export default Challenge
