import TopicPage from '../components/TopicPage'
import './Learn.css'
import NavBar from '../components/NavBar.tsx'
import Loginpopup from '../components/Loginpopup.tsx';
import { useState } from "react";

function Learn() {

  const [isLoginOpen, setLoginOpen] = useState(false);

  return (
    <div>
      <NavBar onLoginClick={() => setLoginOpen(true)} />
      <Loginpopup isOpen={isLoginOpen} onClose={() => setLoginOpen(false)} />

        <div className="mainContainer">
            <div className="bgFrame">
            <TopicPage page="OWASP Top 10" /> 
            
            <div className='flex justify-between pb-[0px]  mt-[30px]'>
              <div className="card image-full w-96 shadow-xl mr-[20px]">
                <figure>
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" />
                </figure>
                <div className="card-body content-between">
                  <h2 className="card-title">A01 </h2>
                  <div className="flex items-end">
                  </div>
                </div>
                <div className='z-[100] flex items-end'>
                    <progress className="progress progress-error w-full pb-[0.5px]" value="100" max="100"></progress>
                </div>
              </div>

              <div className="card image-full w-96 shadow-xl mr-[20px] ">
                <figure>
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" />
                </figure>
                <div className="card-body content-between">
                  <h2 className="card-title">A02 </h2>
                  <div className="flex items-end">
                  </div>
                </div>
                <div className='z-[100] flex items-end'>
                    <progress className="progress progress-error w-full pb-[0.5px]" value="100" max="100"></progress>
                </div>
              </div>                        
            </div>

            <div className='flex justify-between pb-[0px]  mt-[30px]'>
              <div className="card image-full w-96 shadow-xl mr-[20px]">
                <figure>
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" />
                </figure>
                <div className="card-body content-between">
                  <h2 className="card-title">A03 </h2>
                  <div className="flex items-end">
                  </div>
                </div>
                <div className='z-[100] flex items-end'>
                    <progress className="progress progress-error w-full pb-[0.5px]" value="100" max="100"></progress>
                </div>
              </div>

              <div className="card image-full w-96 shadow-xl mr-[20px] ">
                <figure>
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" />
                </figure>
                <div className="card-body content-between">
                  <h2 className="card-title">A04 </h2>
                  <div className="flex items-end">
                  </div>
                </div>
                <div className='z-[100] flex items-end'>
                    <progress className="progress progress-error w-full pb-[0.5px]" value="100" max="100"></progress>
                </div>
              </div>                        
            </div>

            <div className='flex justify-between pb-[0px]  mt-[30px]'>
              <div className="card image-full w-96 shadow-xl mr-[20px]">
                <figure>
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" />
                </figure>
                <div className="card-body content-between">
                  <h2 className="card-title">A05 </h2>
                  <div className="flex items-end">
                  </div>
                </div>
                <div className='z-[100] flex items-end'>
                    <progress className="progress progress-error w-full pb-[0.5px]" value="100" max="100"></progress>
                </div>
              </div>

              <div className="card image-full w-96 shadow-xl mr-[20px] ">
                <figure>
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" />
                </figure>
                <div className="card-body content-between">
                  <h2 className="card-title">A06 </h2>
                  <div className="flex items-end">
                  </div>
                </div>
                <div className='z-[100] flex items-end'>
                    <progress className="progress progress-error w-full pb-[0.5px]" value="100" max="100"></progress>
                </div>
              </div>                        
            </div>

            <div className='flex justify-between pb-[0px]  mt-[30px]'>
              <div className="card image-full w-96 shadow-xl mr-[20px]">
                <figure>
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" />
                </figure>
                <div className="card-body content-between">
                  <h2 className="card-title">A07 </h2>
                  <div className="flex items-end">
                  </div>
                </div>
                <div className='z-[100] flex items-end'>
                    <progress className="progress progress-error w-full pb-[0.5px]" value="100" max="100"></progress>
                </div>
              </div>

              <div className="card image-full w-96 shadow-xl mr-[20px] ">
                <figure>
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" />
                </figure>
                <div className="card-body content-between">
                  <h2 className="card-title">A08 </h2>
                  <div className="flex items-end">
                  </div>
                </div>
                <div className='z-[100] flex items-end'>
                    <progress className="progress progress-error w-full pb-[0.5px]" value="100" max="100"></progress>
                </div>
              </div>                        
            </div>
            
            <div className='flex justify-between pb-[0px]  mt-[30px]'>
              <div className="card image-full w-96 shadow-xl mr-[20px]">
                <figure>
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" />
                </figure>
                <div className="card-body content-between">
                  <h2 className="card-title">A09 </h2>
                  <div className="flex items-end">
                  </div>
                </div>
                <div className='z-[100] flex items-end'>
                    <progress className="progress progress-error w-full pb-[0.5px]" value="100" max="100"></progress>
                </div>
              </div>

              <div className="card image-full w-96 shadow-xl mr-[20px] ">
                <figure>
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" />
                </figure>
                <div className="card-body content-between">
                  <h2 className="card-title">A10 </h2>
                  <div className="flex items-end">
                  </div>
                </div>
                <div className='z-[100] flex items-end'>
                    <progress className="progress progress-error w-full pb-[0.5px]" value="100" max="100"></progress>
                </div>
              </div>                        
            </div>

          </div>
        </div> 
    </div>
  )
}

export default Learn
