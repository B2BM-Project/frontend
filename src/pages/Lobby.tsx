import NavBar from "../components/NavBar"
import TopicPage from '../components/TopicPage.tsx';
import "../App.css"
import "./CreateRoom.css"
function Lobby() {
  return (
    <>
      <NavBar onLoginClick={() => setLoginOpen(true)} />
      <div className="mainContainer2">
        <div className="topFrame">
          <h1>id</h1>
        </div>
        <div className="leftFrame">
          <h1>dfs</h1>
        </div>
        <div className="bgFrame2">
          <TopicPage page="Lobby"></TopicPage>
        </div>


      </div>
    </>
  )
}

export default Lobby
