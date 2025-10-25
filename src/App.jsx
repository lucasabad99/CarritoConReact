import './App.css';
import ItemDetailContainer from './Components/ItemDetailConteiner';
import ItemListContainer from './Components/ItemListContainer';
import NavBar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createContext } from 'react';

// ✅ Crear el contexto
const cartContext = createContext({cart : []});
const CartProvider = cartContext.Provider;

function App() {
  return (
    <BrowserRouter>
      <CartProvider value={{ cart: [1,2,3,4,5,6] }}>
        <NavBar />
        <h1>Bienvenido a mi tienda</h1>
        <h2>¡Pasen y vean!</h2>

        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/detail/:idParam" element={<ItemDetailContainer />} />
          <Route
            path="/category/:catParam"
            element={<ItemListContainer greeting="Categoría de Productos" />}
          />
          <Route
            path="*"
            element={<h2>ERROR 404: NO ENCONTRAMOS RESULTADOS</h2>}
          />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export { cartContext };
export default App;