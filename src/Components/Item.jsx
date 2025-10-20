import { Link } from "react-router";

export default function Item(props) {
  return (
    <div>
      <img src={props.img} alt={props.title} />
      <h4>{props.title}</h4>
      <p>{props.descripcion}</p>
      
      
<Link to={`/detail/${props.id}`}>
        <button>Ver detalle</button>
      </Link>

      
    </div>
  );
}
