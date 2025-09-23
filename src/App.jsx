import './App.css';
import ItemListContainer from './Components/ItemListContainer';
import NavBar from './Components/Navbar';

function App() {
  return (
    <>
      <div id="Div1" className="box">
        <NavBar />
        <h1>Bienvenido a mi tienda</h1>
      </div>
      <div>
        <h2>Pasen y vean!</h2>
      </div>
      <ItemListContainer greeting="Nuestros productos" />
    </>
  );
}

export default App;

