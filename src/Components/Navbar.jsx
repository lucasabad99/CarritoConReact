import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar">
  <div className="nav-buttons">
    <Link className="link-home" to="/">Tienda de Lucas Abad</Link>
    <Link className="link-comedia" to="/category/Comedia">Comedia</Link>
    <Link className="link-drama" to="/category/Drama">Drama</Link>
    <Link className="link-ciencia" to="/category/CienciaFiccion">Ciencia Ficcion</Link>
    <Link className="link-musical" to="/category/Musical">Musical</Link>
    <Link className="link-suspenso" to="/category/Suspenso">Suspenso</Link>
    <Link className="link-terror" to="/category/Terror">Terror</Link>
    <Link className="link-historia" to="/nuestra-historia">Nuestra Historia</Link>
  </div>
  <CartWidget />
</nav>
  );
};

export default NavBar;

