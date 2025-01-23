import TopicPage from "../components/TopicPage";
import Card from "../components/Card";
import "./Challenge.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Login_Comp from "../components/Login_Comp";

interface CardDetail {
  id: number;
  type: string;
  title: string;
  description: string;
  img_path: string;
  route_path: string;
}

interface Data {
  card_detail: CardDetail[];
}

function SelectLesson() {
  const [data, setData] = useState<Data>({ card_detail: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  // fetch ข้อมูล จาก URL
  useEffect(() => {
    // ฟังก์ชันเพื่อดึงข้อมูล
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/card`
        );
        setData(response.data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  console.log(data);
  return (
    <>
      <Login_Comp />
      <div className="mainContainer">
        <div className="bgFrame">
          <TopicPage page="Beginner" />
          <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2 justify-items-center mt-8">
            {data?.card_detail?.map((item: CardDetail, index: number) => (
              <div key={index}>
                <Card
                  title={item.title}
                  description={item.description}
                  img_path={item.img_path}
                  route_path={item.route_path}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default SelectLesson;
