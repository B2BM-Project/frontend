function Card(props: { title: string ; description: string; route_path: string;img_path: string;}) {
  return (
    <div>
        <div id="card-container" className="card bg-transparent w-96 shadow-xl mb-6">
            <figure>
                <a href={props.route_path}><img className="card-img"
                src={props.img_path}
                alt="img" /></a>
            </figure>
            <div className="card-body">
                <a href={props.route_path}id="card-title" className="card-title">{props.title} </a>
                <p id="card-description" className="">{props.description}</p>
            </div>
            </div>
    </div>
  )
}

export default Card
