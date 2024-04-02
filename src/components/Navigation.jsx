import PropTypes from 'prop-types';
import { Link } from "react-router-dom";


const Navigation = ({navItems}) => {



    return (
        <>
        <div className='nav-bar'>
            <div className='nav-text'>
            <Link to = "/about">
            <h4>About</h4>
            </Link>
            <Link to="/contact">
            <h4>Contact</h4>
            </Link>
            </div>
            
        </div>
        </>
    
    );

    
    }
    Navigation.propTypes = {
        navItems: PropTypes.array,
    };
    
    
    
    
    
    
    
    
    
    export default Navigation