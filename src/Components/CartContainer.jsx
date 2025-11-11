import { useContext } from "react";
import cartContext from "../context/cartContext";
import { createBuyOrder } from "../data/FirestoreService";
import CheckOutForm from "./CheckOutForm";



function CartContainer(){
const { cart } = useContext(cartContext);


async function handleCheckOut(){
    const orderData= {
        buyer: {name: "Valentina", email:"Valentina@gmail.com", phone: 1234}, 
        cart,
        Total: 999,
        date: new Date(),
    }
    const response = await createBuyOrder(orderData);
    alert(`Gracias por tu compra, este es el id de tu ticket final: ${response.id}`)
}

    return <section>
        <h1>Tu carrito de compras </h1>
        <div>
            { cart.map(item => <div key={item.id}>
            <h3>{item.title}</h3>
            <img width="150" src={item.img}></img>
            <p>$ {item.price}</p>
            <p>Cantidad:  {item.quantity}</p>
            <button>Eliminar</button>
            </div>)}
        </div>
        <div>
            <CheckOutForm/>
        </div>
    </section>
}

export default CartContainer;