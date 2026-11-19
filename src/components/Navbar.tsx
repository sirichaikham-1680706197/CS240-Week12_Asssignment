import { NavLink } from "react-router";
import { useCartStore } from "../stores/useCartStore";

function Navbar() {
  const cartCount = useCartStore((state) => state.cart.length);
  const navClass = ({ isActive }: { isActive: boolean }) => isActive ? "nav-link active" : "nav-link";
  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Main navigation">
        <NavLink to="/" end className="brand">My Shop</NavLink>
        <div className="nav-menu">
          <NavLink to="/" end className={navClass}>Home</NavLink>
          <NavLink to="/cart" className={navClass}>Cart <span className="nav-cart-count">{cartCount}</span></NavLink>
          <NavLink to="/about" className={navClass}>About</NavLink>
        </div>
      </nav>
    </header>
  );
}
export default Navbar;
