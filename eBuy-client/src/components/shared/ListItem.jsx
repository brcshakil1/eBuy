import { NavLink } from "react-router-dom";
import { PropTypes } from "prop-types";

const ListItem = ({ navigate, content, icon: Icon }) => {
  return (
    <NavLink
      to={`${navigate ? navigate : "/"}`}
      className="text-slate-500 hover:text-primary md:text-neutral md:hover:text-neutral md:hover:bg-[#3b3b3bb3]"
    >
      <li className="flex flex-col md:flex-row justify-center items-center">
        <Icon />
        <span className="text-sm md:text-lg block md:hidden"> {content}</span>
      </li>
    </NavLink>
  );
};

ListItem.propTypes = {
  navigate: PropTypes.string,
  content: PropTypes.string,
  icon: PropTypes.string,
};

export default ListItem;
