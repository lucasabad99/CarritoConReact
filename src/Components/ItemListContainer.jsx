import Item from "./Item";
import getData from "../data/mockAPIService.js";
import { useEffect, useState } from "react";

const ItemListContainer = ({ prueba }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

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
      <h3>-- {prueba} --</h3>
      {loading ? (
        <h4>Cargando productos...</h4>
      ) : (
        items.map((item) => <Item key={item.id} {...item} />)
      )}
    </section>
  );
};

export default ItemListContainer;




