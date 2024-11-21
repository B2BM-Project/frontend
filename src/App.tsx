import NavBar from './components/NavBar.tsx'
import TopicPage from './components/TopicPage.tsx'

function App() {
  return (
    <>
        <NavBar/>
        <div className="mainContainer">
            <div className="bgFrame">
              <TopicPage page="Home" />
            </div>
        </div> 
    </>
  )
}

export default App

