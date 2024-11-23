import NavBar from '../components/NavBar'
import TopicPage from '../components/TopicPage'
import SliderCard from '../components/SliderCard'
import "./Challenge.css"


function Challenge() {
  
  return (
    <>
        <NavBar/>
        <div className="mainContainer">
            <div className="bgFrame">
              <TopicPage page="Challenge" />
              <SliderCard/>
            </div>
        </div> 
    </>
  )
}

export default Challenge
