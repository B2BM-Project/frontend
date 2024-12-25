import "../pages/CreateRoom.css"
import TopicPage from '../components/TopicPage.tsx';

function Profile2(props: {task_num: number;task_title: string; task_des: string; task_ip: string; task_file: string;}) {
    return (
    <>
    <div className="bgFrame2">
        <TopicPage page="Lobby"></TopicPage>
        <p className="text-xs font-semibold mb-1">Task Details {props.task_num}</p>
        <div className="blog-detail">
            <p className="whitespace-pre-wrap text-base">Task Title          :      {props.task_title}</p>
            <p className="whitespace-pre-wrap text-base">Description      :      {props.task_des}</p>
            <p className="whitespace-pre-wrap text-base">IP Address        :      {props.task_ip}</p>
            <p className="whitespace-pre-wrap text-base">File                      :      {props.task_file}</p>
        </div>
    </div>
    </>
    )
}

export default Profile2
