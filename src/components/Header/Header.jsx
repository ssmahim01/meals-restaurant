import { NavLink } from "react-router-dom";
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav className="md:text-lg text-gray-600 font-medium flex gap-3">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/meals">Meals</NavLink>
                <NavLink to="/dashboard">Dashboard</NavLink>
            </nav>
        </div>
    );
};

export default Header;