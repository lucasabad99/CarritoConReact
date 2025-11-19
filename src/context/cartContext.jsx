import { createContext, useState } from 'react';


const cartContext = createContext({cart : []});

export function CartContextProvider( {children }){
    const [cartItems,setCartItems] = useState([]);

  function addItem(item){

  const newCartItems = structuredClone(cartItems);
  newCartItems.push(item);
  setCartItems(newCartItems);
  }


 // Eliminar producto por ID
  function removeItem(id) {
    setCartItems(cartItems.filter(item => item.id !== id));
  }


function clearCart() {
  setCartItems([]);
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
    <cartContext.Provider value ={ {cart: cartItems, addItem, removeItem, clearCart, countItemsInCart, getTotalPrice} }>
      {children}
    </cartContext.Provider>
)
}

export default cartContext;