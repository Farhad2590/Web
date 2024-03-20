import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>
            <h2>This is nav</h2>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/Contact">Contact us</Link>
                <Link to="/About">About</Link>
                <Link to="/Users">Users</Link>
            </nav>
            
        </div>
    );
};

export default Header;