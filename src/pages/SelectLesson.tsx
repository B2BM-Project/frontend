import NavBar from '../components/NavBar'
import TopicPage from '../components/TopicPage'
import Card from '../components/Card'
import "./Challenge.css"

// Mockup API 
const data=[
    {
        id: 1,
        type: 'Beginner',
        title: 'Beginer 1',
        description: 'คำสั่งสำหรับทดสอบระบบ',
        image: 'https://online.stanford.edu/sites/default/files/styles/widescreen_tiny/public/2019-07/hack-lab_INTLPOL268.jpg', 
        link: 'http://localhost:5173/topic-detail'
    },
    {
        id: 2,
        type: 'Beginner',
        title: 'Beginer 2',
        description: 'คำสั่งสำหรับทดสอบระบบ',
        image: 'https://www.foley.com/wp-content/uploads/2024/08/cybersecuritylock1680x680.jpg', 
        link: 'http://localhost:5173/topic-detail'
    },
    {
        id: 3,
        type: 'Beginner',
        title: 'Beginer 3',
        description: 'คำสั่งสำหรับทดสอบระบบ',
        image: 'https://www.mckinsey.com/spContent/bespoke/tech-trends-2024-hero-nav/techtrends-hero-desktop.jpg', 
        link: 'http://localhost:5173/topic-detail'
    },
    {
        id: 4,
        type: 'Beginner',
        title: 'Beginer 4',
        description: 'คำสั่งสำหรับทดสอบระบบ',
        image: 'https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_640.jpg', 
        link: 'http://localhost:5173/topic-detail'
    },
    {
        id: 5,
        type: 'Beginner',
        title: 'Beginer 5',
        description: 'คำสั่งสำหรับทดสอบระบบ',
        image: 'https://online.stanford.edu/sites/default/files/styles/widescreen_tiny/public/2019-07/hack-lab_INTLPOL268.jpg',
        link: 'http://localhost:5173/topic-detail'
    },
    {
        id: 6,
        type: 'Beginner',
        title: 'Beginer 6',
        description: 'คำสั่งสำหรับทดสอบระบบ',
        image: 'https://online.stanford.edu/sites/default/files/styles/widescreen_tiny/public/2019-07/hack-lab_INTLPOL268.jpg', 
        link: 'http://localhost:5173/topic-detail'
    },
]
function SelectLesson() {
    return (
    <>
        <NavBar/>
        <div className="mainContainer">
            <div className="bgFrame">
                <TopicPage page="Beginner" />
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 justify-items-center mt-8'>
                    {data.map((item,idx) => {
                        return(
                            <div  key={idx}>
                                <Card title={item.title} description={item.description} img_path={item.image} link={item.link}/>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div> 
    </>
    )
}

export default SelectLesson
