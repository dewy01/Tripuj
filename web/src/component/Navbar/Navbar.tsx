import { Link } from 'react-router-dom';
import { MenuItems } from './MenuItems';
import './NavbarStyles.css'

export const Navbar = () => {
    return(
        <nav className='NavbarItems'>
            <h1 className='navbar-logo'>Tripuj</h1>
            <ul className='nav-menu'>
                {MenuItems.map(item=>(
                    <li>
                        <Link to={item.url} className={item.cName}>{item.title}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navbar;