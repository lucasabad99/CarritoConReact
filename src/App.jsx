import './App.css';
import ItemDetailConteiner from './Components/ItemDetailConteiner';
import ItemListContainer from './Components/ItemListContainer';
import NavBar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {CartContextProvider} from './context/cartContext'
import CartContainer from './Components/CartContainer';
import { exportProducts } from './data/FirestoreService';
import {useState, useEffect} from "react";
import getData from './data/FirestoreService';



function App() {


/*useEffect(() => {
    exportProducts()
      .then(() => console.log("Productos exportados automáticamente"))
      .catch(err => console.error(err));
  }, []); // [] asegura que se ejecute solo una vez*/

useEffect(() => {
  getData()
    .then(() => console.log("Productos cargados desde Firestore"))
    .catch(err => console.error(err));
}, []);


  return(
  
    <BrowserRouter>
      <CartContextProvider>
        <NavBar/>
        <h1>Bienvenido a mi tienda</h1>
        <h2>¡Pasen y vean!</h2>

        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/detail/:idParam" element={<ItemDetailConteiner />} />
          <Route path="/category/:catParam" element={<ItemListContainer greeting="Categoría de Productos" />}/>
          <Route path="*" element={<h2>ERROR 404: NO ENCONTRAMOS RESULTADOS</h2>}/>
          <Route path="/cart" element={<CartContainer/>}/>

        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}


export default App;