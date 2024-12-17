import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from '../components/Card'
import "../pages/Challenge.css"

function SliderCard(props: {data:any; category: string;title: string ; description: string; route_path: string;img_path: string;}) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500, /*ms unit*/
        slidesToShow: 2,
        slidesToScroll: 2,
    };
    const data = props.data
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
                            <Card title={item.title} description={item.description} img_path={item.img_path} route_path={item.route_path}/>
                            {/* <Card title={props.title} description={props.description} img_path={props.img_path} route_path={props.route_path}/> */}
                        </div>
                    )
                })}
            </Slider>
        </>
    )
}

export default SliderCard
