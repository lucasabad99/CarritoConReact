import { useContext, useState } from "react";
import cartContext from "../context/cartContext";
import { createBuyOrder } from "../data/FirestoreService";
import CheckOutForm from "./CheckOutForm";



function CartContainer(){
 const { cart, removeItem, clearCart } = useContext(cartContext);
const [orderCreated, setOrderCreated] = useState(false);



async function handleCheckOut(formData){
    const orderData= {
        buyer: formData, 
        cart,
        Total: 999,
        date: new Date(),
    }
    const response = await createBuyOrder(orderData);
    alert(`Gracias por tu compra, este es el id de tu ticket final: ${response.id}`)
    setOrderCreated(response.id);
    clearCart();
}

if(orderCreated){
return <section>
    <h2>Gracias por su compra señor</h2>
    <p>este es el id: {orderCreated}</p>
</section>
}

    return <section>
        <h1>Tu carrito de compras </h1>
        <div>
            {cart.map(item => {
    if (!item.title || !item.price || !item.img) {
        return null; // No renderiza si faltan datos
    }
    return (
        <div key={item.id}>
            <h3>{item.title}</h3>
            <img width="150" src={item.img} alt={item.title} />
            <p>$ {item.price}</p>
            <p>Cantidad: {item.quantity}</p>
            <button onClick={() => removeItem(item.id)}>Eliminar</button>
        </div>
    );
})}
        </div>
        <div>
            <CheckOutForm  handleCheckOut= {handleCheckOut}/>
            <button onClick={ clearCart }>Vaciar Carrito</button>
        </div>
    </section>
}

export default CartContainer;