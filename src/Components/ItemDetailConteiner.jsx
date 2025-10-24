import ItemCount from "./ItemCount";
import { getProductById } from "../data/mockAPIService.js";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import 'ldrs/ring';

function ItemDetailContainer() {
  const [itemData, setItemData] = useState();
  const [loading, setLoading] = useState(true);
  const { idParam } = useParams();

  const color = "#36d7b7";
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  useEffect(() => {
    console.log("ID recibido:", idParam);
    setLoading(true);
    getProductById(idParam)
      .then((res) => {
        console.log("Producto recibido:", res);
        setItemData(res);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al obtener el producto:", error);
        setLoading(false);
      });
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
      {loading ? (
        <ClipLoader
          color={color}
          loading={true}
          cssOverride={override}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        itemData && (
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
        )
      )}
    </div>
  );
}

export default ItemDetailContainer;