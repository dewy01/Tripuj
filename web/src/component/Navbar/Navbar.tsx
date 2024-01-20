import { Link } from 'react-router-dom';
import { MenuItems } from './MenuItems';
import './NavbarStyles.css'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

export const Navbar = () => {
    const [open, setOpen] = useState<boolean>(false);
    const handleOpen = () =>{
        setOpen(!open);
    }
    return(
        <nav className='NavbarItems'>
            <h1 className='navbar-logo'>Tripuj</h1>
            <div className='menu-icons' onClick={handleOpen}>
                {open ? <MenuIcon color='action'/> : <CloseIcon color='action'/>}
            </div>
            <ul className={open ? 'nav-menu' : 'nav-menu active'}>
                {MenuItems.map(item=>(
                    <li>
                        <Link to={item.url} className={item.cName}>{item.title}</Link>
                    </li>
                ))}
                <button>SignUp</button>
            </ul>
        </nav>
    );
}

export default Navbar;