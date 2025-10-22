import ItemCount from "./ItemCount";
import { getProductById } from "../data/mockAPIService.js";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
  const [itemData, setItemData] = useState({ loading: true });
  const { idParam } = useParams();

  useEffect(() => {
    getProductById(idParam)
      .then((res) => setItemData(res))
      .catch((error) => console.error("Error al obtener el producto:", error));
  }, [idParam]);

  return (
    <div
      className="item-card"
      style={{
        border: "solid 1px grey",
        backgroundColor: "white",
        padding: "10px",
        borderRadius: "8px",
        width: "200px",
        textAlign: "center",
      }}
    >
      {itemData.loading ? (
        <h3>Cargando...</h3>
      ) : (
        <div>
          <img
            src={itemData.img}
            alt={itemData.title}
            style={{
              width: "120px",
              height: "160px",
            }}
          />
          <h4>{itemData.title}</h4>
          <p>Fecha de estreno: {itemData.fecha_de_estreno}</p>
          <ItemCount />
        </div>
      )}
    </div>
  );
}

export default ItemDetailContainer;