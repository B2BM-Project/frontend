import "../pages/CreateRoom.css"
import TopicPage from './TopicPage.tsx';

function Task(props: {task_num: string;task_title: string; task_des: string; task_ip: string; task_file: string;task_score: string;}) {
    return (
    <>
    <div className="bgFrame2">
        {/* <TopicPage page="Lobby"></TopicPage> */}
        <div className="flex justify-between mt-5 mb-1">
            <p className="text-xs font-semibold mb-1">{props.task_num}</p>
            <p className="text-xs font-semibold">Score : {props.task_score}</p>
        </div>
        <div className="blog-detail">
            <p className="whitespace-pre-wrap text-base">Task Title          :      {props.task_title}</p>
            <p className="whitespace-pre-wrap text-base">Description      :      {props.task_des}</p>
            <p className="whitespace-pre-wrap text-base">IP Address        :      {props.task_ip}</p>
            <p className="whitespace-pre-wrap text-base">File                      :      {props.task_file}</p>
        </div>
        <div className="justify-center text-center my-2">
            <form>
                <label className="text-xs font-semibold ">
                    Flag Submit : 
                    <input className="ml-1 px-2 text-xs font-medium rounded-l text-[#302f31]" type="text" name={props.task_num} placeholder="submit flag here" />
                    <input className="px-1 bg-[#E34C4C] text-xs font-medium rounded-r cursor-pointer	" type="submit" value="Submit" />
                </label>
            </form>
        </div>
    </div>
    </>
    )
}

export default Task
