import "../pages/CreateRoom.css"

function Profile(props: {img: string; name: string; owner: boolean; ready: boolean;}) {
return (
    <>
    <div className="avatar">
        <div className="w-5 rounded-full">
            <img src={props.img} />
        </div>
        <p>{props.name}</p>
        {props.owner && (
            <i className="fa-solid fa-crown fa-xs w-4" style={{color: "#FFD43B"}}></i>
        )}
        {!props.owner && (
        props.ready ? <i className="fa-solid fa-check w-4" style={{color: "#63E6BE"}}></i>:<i className="fa-solid fa-xmark w-4" style={{color: "#d91230"}}></i>
        )}
    </div>
    
    </>
)
}

export default Profile
