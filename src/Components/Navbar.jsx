import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav className="navbar">
      <h3>TiendaLucass</h3>
      <div className="nav-buttons">
        <button>Moldes</button>
        <button>Piedras</button>
        <button>Contacto</button>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;

