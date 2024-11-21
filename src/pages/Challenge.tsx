import NavBar from '../components/NavBar'
import TopicPage from '../components/TopicPage'

function Challenge() {
  return (
    <>
        <NavBar/>
        <div className="mainContainer">
            <div className="bgFrame">
              <TopicPage page="Challenge" />
            </div>
        </div> 
    </>
  )
}

export default Challenge
