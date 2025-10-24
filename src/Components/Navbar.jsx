import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Tienda de Lucas Abad</Link>
      <div className="nav-buttons">
        <Link to="/category/:catParam">Categorías</Link>
        <Link to="/category/Drama">Drama</Link>
        <button>Nuestra Historia</button>
        <button>Contacto</button>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;

