import { NavLink } from "react-router-dom";
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav className="text-lg text-gray-500 font-bold flex gap-3">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/meals">Meals</NavLink>
                <NavLink to="/about">About Us</NavLink>
            </nav>
        </div>
    );
};

export default Header;