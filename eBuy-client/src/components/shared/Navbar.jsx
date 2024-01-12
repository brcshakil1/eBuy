import { Link } from "react-router-dom";
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
    <div className="bg-white md:bg-primary py-2.5 md:py-4 fixed bottom-0 w-full md:sticky md:top-0  ">
      <Container>
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="text-neutral text-4xl font-bold hidden md:block"
          >
            eBuy
          </Link>
          <SearchProducts />
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
