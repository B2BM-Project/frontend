/* eslint-disable @typescript-eslint/no-explicit-any */
import NavBar from '../components/NavBar.tsx'
import Loginpopup from '../components/Loginpopup.tsx';
import TopicPage from '../components/TopicPage'
import SliderCard from '../components/SliderCard'
import "./Challenge.css"
import { useState, useEffect } from 'react';
import axios from "axios";

function Challenge() {
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [data, setData] = useState([]);
  // const [dataBeginner, setDataBeginner] = useState([]);
  // const [dataWeb, setDataWeb] = useState([]);
  // const [dataPwn, setDataPwn] = useState([]);
  // const [dataCrypto, setDataCrypto] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
    // fetch ข้อมูล จาก URL 
    useEffect(() => {
      // ฟังก์ชันเพื่อดึงข้อมูล
      const fetchData = async () => {
          try {
              const response = await axios.get("http://127.0.0.1:5100/card");
              setData(response.data);
              // const response1 = await axios.get("http://127.0.0.1:5100/card/beginner");
              // setDataBeginner(response1.dataBeginner);
              // const response2 = await axios.get("http://127.0.0.1:5100/card/web");
              // setDataWeb(response2.dataWeb);
              // const response3 = await axios.get("http://127.0.0.1:5100/card/pwn");
              // setDataPwn(response3.dataPwn);
              // const response4 = await axios.get("http://127.0.0.1:5100/card/crypto");
              // setDataCrypto(response4.dataCrypto);
          } catch (err) {
              setError(err.message);
          } finally {
              setLoading(false);
          }
      };
      fetchData();
  }, []);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  console.log(data)

  return (
    <>
        <NavBar onLoginClick={() => setLoginOpen(true)} />
        <Loginpopup isOpen={isLoginOpen} onClose={() => setLoginOpen(false)} />

        <div className="mainContainer">
            <div className="bgFrame">
              <TopicPage page="Challenge" />
              {data?.card_detail?.map((item: { title: string; description: string; img_path: string; route_path: string; },index: any) => (
                <>
                <SliderCard key={`beginner-${index}`} category="Beginner" data={item} title={item.title} description={item.description} img_path={item.img_path} route_path={item.route_path} />
                <SliderCard key={`web-${index}`} category="Web"  data={item} title={item.title} description={item.description} img_path={item.img_path} route_path={item.route_path} />
                <SliderCard key={`pwn-${index}`} category="pwn"  data={item} title={item.title} description={item.description} img_path={item.img_path} route_path={item.route_path} />
                <SliderCard key={`crypto-${index}`} category="Crypto"  data={item} title={item.title} description={item.description} img_path={item.img_path} route_path={item.route_path} />
                </>
              ))}
              {/* {dataWeb.card_detail?.map((item,index) => (
                <>
                <SliderCard key={index} category="Web"  data={item} title={item.title} description={item.description} img_path={item.img_path} route_path={item.route_path} />
                </>
              ))} */}
            </div>
        </div> 
    </>
  )
}

export default Challenge
