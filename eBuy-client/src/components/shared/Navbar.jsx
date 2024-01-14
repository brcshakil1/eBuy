import { Link, NavLink } from "react-router-dom";
import SearchProducts from "./SearchProducts";
import PersonIcon from "@mui/icons-material/Person";
import { Container } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ListItem from "./ListItem";
import InventoryIcon from "@mui/icons-material/Inventory";
import NotificationImportantIcon from "@mui/icons-material/NotificationImportant";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Navbar = () => {
  const mobileNavLinks = (
    <>
      <ListItem navigate="/" content="Home" icon={HomeIcon} />

      <ListItem navigate="/discover" content="Discover" icon={InventoryIcon} />

      <ListItem
        navigate="/notification"
        content="Notification"
        icon={NotificationImportantIcon}
      />

      <ListItem navigate="/cart" content="Cart" icon={ShoppingCartIcon} />

      <ListItem navigate="/account" content="Account" icon={PersonIcon} />
    </>
  );
  return (
    <div className="bg-slate-200 md:bg-primary py-2 md:py-4 fixed bottom-0 w-full md:sticky md:top-0  ">
      <Container>
        <div className="flex justify-between items-center ">
          <Link
            to="/"
            className="text-neutral text-4xl font-bold hidden md:block "
          >
            eBuy
          </Link>
          <div>
            <SearchProducts />
          </div>
          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-6 ">
            <NavLink to="/login">
              <li className="hover:bg-[#38383891] text-white px-3 py-2 rounded-xl">
                <ShoppingCartIcon></ShoppingCartIcon>
              </li>
            </NavLink>

            <NavLink to="/login" className="">
              <li className="hover:bg-[#38383891] text-white px-3 py-2 rounded-xl font-semibold">
                Login
              </li>
            </NavLink>
            <div className="w-[1px] h-[15px] bg-white"></div>
            <NavLink to="/login">
              <li className="hover:bg-[#38383891] text-white px-3 py-2 rounded-xl font-semibold">
                Sign Up
              </li>
            </NavLink>

            <NavLink to="/account">
              <li className="hover:bg-[#38383891] text-white px-3 py-2 rounded-xl">
                <PersonIcon />
              </li>
            </NavLink>
          </ul>
          {/* Mobile nav links */}
          <ul className="flex justify-between items-center w-full md:hidden">
            {mobileNavLinks}
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
