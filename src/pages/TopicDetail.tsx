import TopicPage from "../components/TopicPage";
import "./TopicDetail.css"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Login_Comp from "../components/Login_Comp";

interface SubDetail {
    sub: string;
    img: string;
  }
  interface TopicDetail {
    id: number;
    description: SubDetail[];
    HowtoPrevent: SubDetail[];
    ExampleAttackScenarios: SubDetail[];
    title: string;
    proposition: SubDetail[];
  }
  interface Data {
    topic_detail: TopicDetail[];
  }

function TopicDetail() {
    const { id } = useParams(); // รับค่า id จาก URL
    const [data, setData] = useState<Data>({ topic_detail: [] });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");


    // fetch ข้อมูล จาก URL 
    useEffect(() => {
        // ฟังก์ชันเพื่อดึงข้อมูล
        const fetchData = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/detail/${id}`);
                await setData(response.data);
            } catch (err) {
                setError((err as Error).message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [id]);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    console.log(data)

    return (
        <>
        <Login_Comp/>
        <div className="mainContainer">
            <div className="bgFrame">
                {data?.topic_detail?.map((item,index) => (
                    <div  key={index}>
                    {/* หัวข้อ */}
                    <TopicPage page={item.title} />
                    {/* หัวข้อตัวอย่างการโจมตี */}
                    <p className="subTopic">คำอธิบาย (Description)</p>
                    {/* แสดงข้อความจาก array ของ description */}
                    {item.description.map((desc, index) => (
                    <div key={index}>
                        <p className="contentParagraph" key={index}>{desc.sub}</p>
                        {/* ตรวจสอบว่ามี img หรือไม่ */}
                        {desc.img && <img className="contentImg" src={desc.img} alt={`Description ${index}`} />}
                    </div>
                    ))}

                    {/* หัวข้อตัวอย่างการโจมตี */}
                    <p className="subTopic">ตัวอย่างการโจมตี (Example Attack Scenarios)</p>
                    {/* แสดง ExampleAttackScenarios */}
                    {item.ExampleAttackScenarios.map((scenario, index) => (
                        <div key={index}>
                        <p className="contentParagraph">{scenario.sub}</p>
                        {/* แสดงเฉพาะ img ที่มีค่า */}
                        {scenario.img && <img className="contentImg" src={scenario.img} alt={`Scenario ${index}`} />}
                        </div>
                    ))}

                    {/* หัวข้อแนวทางการป้องกัน */}
                    <p className="subTopic">แนวทางการป้องกันปัญหาช่องโหว่ (How to Prevent) </p>
                    {/* แสดง HowtoPrevent */}
                    <ul className="HowToPrevent">
                    {item.HowtoPrevent.map((prevent, index) => (
                        <li key={index}>{prevent.sub}
                        {/* แสดงเฉพาะ img ที่มีค่า */}
                        {prevent.img && <img className="contentImg" src={prevent.img} alt={`HowtoPrevent ${index}`} />}
                        </li>
                    ))}
                    </ul>
                </div>
                ))}

            </div>

            {/* กรอบ Flag Submition */}
            <div className="bgFrame">
                <TopicPage page="Flag Submission" />
                <div className="flag-container1">
                    <div className="flag-container-div1"><p>Challenge done</p></div>
                    <div className="flag-container-div2"><p>1801 solves</p></div>
                </div>
                {/* แสดง Explain Proposition */}
                    <p className="subTopic">โจทย์ (Proposition)</p>
                    {data?.topic_detail?.map((item) => (
                    <ol>
                        {item.proposition?.map((propo, index) => (
                        <li key={index}>{propo.sub}</li>
                        ))}
                    </ol>
                    ))}
                {/* download or link  */}
                <div className="flag-container2">
                    <div><button className="dlBtn">Download File</button></div>
                    <div><p>or</p></div>
                    <div><a className="linkDL" href="https://google.com" target="_blank">www.google.com</a></div>
                </div>
                {/* ปุ่ม Begin */}
                <div className="btnContainer">
                    <button className="beginBtn">Begin Challenge</button>
                </div>
                {/* submit form  */}
                <div className="flag-container3">
                    <form>
                        <label>
                            Flag Submit:<br></br>
                            <input id="txtInput" type="text" name="name" placeholder="submit flag here" />
                        </label>
                        <input id="submitInput" type="submit" value="Submit" />
                        </form>
                </div>
            </div>
        </div>
        </>
    );
}

export default TopicDetail;
