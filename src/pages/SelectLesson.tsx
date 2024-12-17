import NavBar from '../components/NavBar'
import TopicPage from '../components/TopicPage'
import Card from '../components/Card'
import "./Challenge.css"
import { useState, useEffect } from 'react';
import axios from 'axios';

function SelectLesson() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    // fetch ข้อมูล จาก URL 
    useEffect(() => {
        // ฟังก์ชันเพื่อดึงข้อมูล
        const fetchData = async () => {
            try {
                const response = await axios.get("http://127.0.0.1:5100/card");
                setData(response.data);
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
        <NavBar/>
        <div className="mainContainer">
            <div className="bgFrame">
                <TopicPage page="Beginner" />
                <div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2 justify-items-center mt-8'>
                    {data?.card_detail[0]?.map((item,index) => (
                            <div  key={index}>
                                <Card title={item.title} description={item.description} img_path={item.img_path} route_path={item.route_path}/>
                            </div>
                    ))}
                </div>
            </div>
        </div> 
    </>
    )
}

export default SelectLesson
