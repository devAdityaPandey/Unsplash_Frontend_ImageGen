import { useContext } from "react";
import PointsContext from "../../../context/pointsContext";
import "./navbar.css";
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    const contextValues = useContext(PointsContext);
    const page = props.page;

    const customColor = (x) => {
        return { color: page === x ? '#ff6f61' : 'white' };
    }

    return (
        <div className='header-parent-container'>
            <div className='left'>
                <Link to="/" style={customColor('home')}>Home</Link>
                <Link to="/image-generator" style={customColor('imageGenerator')}>Image Generator</Link>
                <Link to="/history" style={customColor('history')}>History</Link>
                <Link to="/contactus" style={customColor('contactus')}>Contact Us</Link>
                <Link to="/signup" style={customColor('signup')}>Signup</Link>
                <Link to="/login" style={customColor('login')}>Login</Link>
            </div>
            <div className="right" style={{ padding: '4px', color: 'brown' }}>
                P
            </div>
            {contextValues.isLoggedIn ?
                <button onClick={contextValues.logout}>Logout</button>
                : null
            }
        </div>
    );
}

export default Navbar;
