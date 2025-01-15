import Login_Comp from "../components/Login_Comp";
import TopicPage from '../components/TopicPage'

function Competition() {
  return (
    <>
      <Login_Comp/>
      <div className='mainContainer'>
        <div className="bgFrame">
          <TopicPage page="Competition" />
        </div>
      </div>
    </>
  )
}

export default Competition
