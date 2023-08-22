import { useContext } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import CartContext from "./context/cartcontext";
function NavBar() {
  const { cart } = useContext(CartContext);
  const count = cart.length ? cart.length : null
  return (
    <nav>
      <ul className="nav-list">
        <li className="nav-toggle">
          <GiHamburgerMenu className="global-icons" />
        </li>
        <li className="nav-brand">
          <Link to="/" className="brand-name">
              adtó<span>cart</span>ó
          </Link>
        </li>
        <li className="nav-cart">
          <Link to="cart" className="nav-cart-link">
          <small id="notification-count">{count}</small>
            <AiOutlineShoppingCart className="global-icons" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
