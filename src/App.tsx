import NavBar from './components/NavBar.tsx'

function App() {
  return (
    <>
        <div className='data-theme="mytheme"'>
        <NavBar/>
        <div className="mainContainer">
            <div className="bgFrame">
              <div className='text-center text-[#F03535] text-[96px] font-bold bg-[#302F31]'>
                Achieve mastery <br />
                through challenge
              </div>
              <div className='text-[64px] font-bold text-[#fffff] bg-[#302F31] text-center'>
                Improve your skills
              </div>
              <div className="flex justify-center mt-10">
                <button className="btn btn-outline btn-error">Click to Learn</button>
              </div>
              <div className='border-4 border-solid border-black rounded-[15px] p-10 mt-[90px] bg-[#E34C4C] flex'>
                <div className='w-1/2 bg-[#E34C4C]'>
                  test
                </div>
                <div className='w-1/2 bg-[#E34C4C]'>
                  test
                </div>
              </div>
            </div>
        </div>
        </div> 
    </>
  )
}

export default App

