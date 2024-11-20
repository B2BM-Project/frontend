import NavBar from '../components/NavBar'
import TopicPage from '../components/TopicPage'

function Competition() {
  return (
    <>
      <NavBar/>
      <div className='mainContainer'>
        <div className="bgFrame">
          <TopicPage page="Competition" />
        </div>
      </div>
    </>
  )
}

export default Competition
