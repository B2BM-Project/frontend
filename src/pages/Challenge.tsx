import NavBar from '../components/NavBar.tsx'
import Loginpopup from '../components/Loginpopup.tsx';
import { useState } from "react";
import TopicPage from '../components/TopicPage'

function Challenge() {

  const [isLoginOpen, setLoginOpen] = useState(false);

  return (
    <>
        <NavBar onLoginClick={() => setLoginOpen(true)} />
        <Loginpopup isOpen={isLoginOpen} onClose={() => setLoginOpen(false)} />

        <div className="mainContainer">
            <div className="bgFrame">
              <TopicPage page="Challenge" />
            </div>
        </div> 
    </>
  )
}

export default Challenge
