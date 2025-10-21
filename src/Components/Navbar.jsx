import CartWidget from './CartWidget';
import { Link } from 'react-router';

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/" > 
       Tienda de Lucas Abad
      </Link>
      <div className="nav-buttons">
        <button>Categorias</button>
        <button>Nuestra Historia</button>
        <button>Contacto</button>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;

