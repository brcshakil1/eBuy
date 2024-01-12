import { Link, NavLink } from "react-router-dom";
import SearchProducts from "./SearchProducts";

const Navbar = () => {
  const navLinks = (
    <>
      <NavLink to="/">
        <li>Home</li>
      </NavLink>
      <NavLink to="/">
        <li>Discover</li>
      </NavLink>
      <NavLink to="/">
        <li>Notifications</li>
      </NavLink>
      <NavLink to="/">
        <li>Cart</li>
      </NavLink>
      <NavLink to="/">
        <li>Account</li>
      </NavLink>
    </>
  );
  return (
    <div>
      <div className="flex justify-between">
        <Link to="/">eBuy</Link>
        <SearchProducts />
        <ul className="flex">{navLinks}</ul>
      </div>
    </div>
  );
};

export default Navbar;
