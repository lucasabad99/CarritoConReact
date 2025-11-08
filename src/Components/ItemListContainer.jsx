import Item from "./Item";
import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import { useParams } from "react-router";
import getData, { getProductsByCategory } from "../data/FirestoreService.js";

const ItemListContainer = ({ props }) => {
getData();

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const {catParam} = useParams();


  const color = "#36d7b7"; 
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  useEffect(() => {
    if (catParam) {
  getProductsByCategory(catParam)
    .then((data) => {
      setItems(data);
      setLoading(false);
    })
    .catch((err) => {
      console.error("Error:", err);
      setLoading(false);
    });
}
    else {
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
    }
    
  }, [catParam]);

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




