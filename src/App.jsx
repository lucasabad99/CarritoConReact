import './App.css';
import ItemCount from './Components/ItemCount';
import ItemDetailContainer from './Components/ItemDetailConteiner';
import ItemListContainer from './Components/ItemListContainer';
import NavBar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div id="Div1" className="box">
        <NavBar />
        <h1>Bienvenido a mi tienda</h1>
        <h2>¡Pasen y vean!</h2>
      </div>

      <Routes>
        {/* ✅ Ruta principal para mostrar las cards */}
        <Route
          path="/"
          element={<ItemListContainer/>}
        />
        
        <Route
          path="/detail/:idParam"
          element={<ItemDetailContainer />}
        />
        <Route
          path="*"
          element={<div><h2>ERROR 404: NO ENCONTRAMOS RESULTADOS</h2></div>}
        />
      </Routes>

      
    </BrowserRouter>
  );
}

export default App;