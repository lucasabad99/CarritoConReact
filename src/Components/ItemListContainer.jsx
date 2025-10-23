import Item from "./Item";
import getData from "../data/mockAPIService.js";
import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";

const ItemListContainer = ({ prueba }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const color = "#36d7b7"; // Elegí el color que prefieras
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  useEffect(() => {
    getData()
      .then((data) => {
        console.log("datos recibidos", data);
        setItems(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error:", err);
        setLoading(false);
      });
  }, []);

  return (
    <section className="itemlist">
      {loading ? (
        <ClipLoader
          color={color}
          loading={loading}
          cssOverride={override}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        items.map((item) => <Item key={item.id} {...item} />)
      )}
    </section>
  );
};

export default ItemListContainer;




