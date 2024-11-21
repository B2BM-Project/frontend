import NavBar from '../components/NavBar'
import TopicPage from '../components/TopicPage'

function Package() {
  return (
    <>
      <NavBar/>
      <div className='mainContainer'>
        <div className="bgFrame">
          <TopicPage page="Upgrade Package" />       
        </div>
      </div>
    </>
  )
}

export default Package
