import { useContext } from "react";
import { cartContext } from "../App";

function CartWidget(){

  const context = useContext(cartContext);
  const cartItemCount = context.cart.length;

   return(<div>
    { cartItemCount }
    🛒 
    
    </div>)
}
  
 



export default CartWidget;
