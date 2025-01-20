import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from '../components/Card'
import "../pages/Challenge.css"

interface DataItem {
    title: string;
    description: string;
    img_path: string;
    route_path: string;
  }
  
  interface SliderCardProps {
    data: DataItem[]; // ใช้ array ของ DataItem
    category: string;
    title: string;
    description: string;
    route_path: string;
    img_path: string;
  }

function SliderCard(props: SliderCardProps) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500, /*ms unit*/
        slidesToShow: 2,
        slidesToScroll: 2,
    };
    const data = props.data.flat() // flat array ให้เหลือ มิติเดียว
    return (
        <>
            <div className="category-container">
                <p>{props.category}</p>
                <a href="/select-lesson">show all</a>
            </div>
            <Slider {...settings}>
                {data.map((item,idx) => {
                    return(
                        <div key={idx} className="slider-div">
                            <Card key={idx} title={item.title} description={item.description} img_path={item.img_path} route_path={item.route_path}/>
                            {/* <Card title={props.title} description={props.description} img_path={props.img_path} route_path={props.route_path}/> */}
                        </div>
                    )
                })}
            </Slider>
        </>
    )
}

export default SliderCard
