import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navigation = ({ navItems }) => {
  return (
    <>
      <div className="nav-bar">
        <Link to ="/">       <img
          className="logo"
          src="https://images.vexels.com/media/users/3/237764/isolated/lists/c765f963a742a064640f085f90fb601c-floral-capital-letter-j-stroke.png"
        /></Link> 
        <div className="nav-text">
            <Link to="/">
                <h3 className="nav-text">Home</h3>
            </Link>
          <Link to="/about">
            <h3 className="nav-text">About</h3>
          </Link>
          <Link to="/contact">
            <h3 className="nav-text">Contact</h3>
          </Link>
        </div>
      </div>
    </>
  );
};
Navigation.propTypes = {
  navItems: PropTypes.array,
};

export default Navigation;
