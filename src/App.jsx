import './App.css';
import ItemDetailContainer from './Components/ItemDetailConteiner';
import ItemListContainer from './Components/ItemListContainer';
import NavBar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import cartContext, {CartContextProvider} from './context/cartContext'
import { createContext, useState } from 'react';
import CartContainer from './Components/CartContainer';
import { exportProducts } from './data/FirestoreService';



function App() {

  return(
    <BrowserRouter>
    <button onClick={exportProducts}> Borrar despues</button>
      <CartContextProvider>
        <NavBar />
        <h1>Bienvenido a mi tienda</h1>
        <h2>¡Pasen y vean!</h2>

        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/detail/:idParam" element={<ItemDetailContainer />} />
          <Route path="/category/:catParam" element={<ItemListContainer greeting="Categoría de Productos" />}/>
          <Route path="*" element={<h2>ERROR 404: NO ENCONTRAMOS RESULTADOS</h2>}/>
          <Route path="/cart" element={<CartContainer/>}/>

        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}


export default App;