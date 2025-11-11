import { createContext, useState } from 'react';


const cartContext = createContext({cart : []});

export function CartContextProvider( {children }){
    const [cartItems,setCartItems] = useState([]);

  function addItem(item){

  const newCartItems = structuredClone(cartItems);
  newCartItems.push(item);
  setCartItems(newCartItems);
  }

  function removeItem(){
    /*Eliminar el prducto con ese id del context */
  }

  function clearCart(){
    //vaciar el carrito de compras del context 
  }

  
function countItemsInCart() {
  let totalItems = 0;
  cartItems.forEach(item => {
    totalItems += Number(item.quantity) || 0; // Si no existe, suma 0
  });
  return totalItems;
}


  function getTotalPrice(){

  }

return(
    <cartContext.Provider value ={ {cart: cartItems, addItem, removeItem, clearCart, countItemsInCart, getTotalPrice } }>
      {children}
    </cartContext.Provider>
)
}

export default cartContext;