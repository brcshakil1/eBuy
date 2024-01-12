import { PropTypes } from "prop-types";

const Container = ({ children }) => {
  return <div className="max-w-7xl mx-auto px-5">{children}</div>;
};

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
