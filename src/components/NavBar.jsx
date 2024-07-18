
import { Link } from "react-router-dom";


const NavBar = () => {
  return (
    <nav className="nav">
      
       <div className="nav-text2">
          <Link className="nav-text" to="/">Home</Link>
       
          <Link className="nav-text" to="/about">About</Link>
      
          <Link className="nav-text" to="/contact">Contact</Link>
          </div>
   
   
    </nav>
  );
}

export default NavBar;