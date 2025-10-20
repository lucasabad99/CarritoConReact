import Item from "./Item";
import getData from "../data/mockAPIService.js";
import { useEffect, useState } from "react";


const ItemListContainer = ({ prueba }) => {
  const [items, setItems] = useState([]);


  useEffect(() => {
    getData()
      .then((data) => {
        console.log("datos recibidos", data);
        setItems(data);
      })
      .catch((err) => console.error("Error:", err));
  }, []);

  return (
    <section className="itemlist">
      <h3>-- {prueba} --</h3>
      {items.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </section>
  );
};

export default ItemListContainer;




