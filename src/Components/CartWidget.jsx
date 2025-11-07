import { useContext } from "react";
import  cartContext  from "../context/cartContext";
import { Link } from "react-router";

function CartWidget(){

  const {countItemsInCart} = useContext(cartContext);

   return(<div>

    <Link to="/cart">
    
    🛒
    { countItemsInCart() }
    
    </Link>
    
    </div>) 
}
  
 



export default CartWidget;
