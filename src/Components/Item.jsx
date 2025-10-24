import { Link } from "react-router";

export default function Item(props) {
  return (
    <div 

 style={{
        display: "flex",              
        alignItems: "center",        
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "10px",
        width: "450px",               
        backgroundColor: "#fff",
        marginBottom: "20px",
        gap: "15px"                   
      }}

>
      <div>
        <img
  src={props.img}
  alt={props.title}
  style={{
    width: "120px",
    height: "160px",
    objectFit: "cover",
    borderRadius: "4px",
    border: "1px solid #ccc"
  }}
/>
        </div>

        <div><h4>{props.title}</h4>
      <p>{props.descripcion}</p>
      
      
<Link to={`/detail/${props.id}`}>
        <button>Ver detalle</button>
      </Link>
</div>
      
      
    </div>
  );
}
