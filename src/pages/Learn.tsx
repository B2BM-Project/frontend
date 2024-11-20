import NavBar from '../components/NavBar'
import TopicPage from '../components/TopicPage'

function Learn() {
  return (
    <div>
      <NavBar/>
        <div className="mainContainer">
            <div className="bgFrame">
            <TopicPage page="OWASP Top 10" />            
            </div>
        </div> 
    </div>
  )
}

export default Learn
