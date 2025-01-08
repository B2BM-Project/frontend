import Login_Comp from "../components/Login_Comp";
import TopicPage from '../components/TopicPage'

function Package() {
  return (
    <>
      <Login_Comp/>
      <div className='mainContainer'>
        <div className="bgFrame">
          <TopicPage page="Upgrade Package" />       
        </div>
      </div>
    </>
  )
}

export default Package
