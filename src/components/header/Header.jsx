
import './Header.css';
import { Link } from 'react-router-dom';

// ______________________________________________________
function Header() {
    return (
        <header className='header'>
            <h2>Libreria Isateo</h2>
             <nav className="registro">
                <ul>

                <li><Link to= "/Ingresar"> Ingresar </Link></li>
               <li><Link to= "/Registrarme">Registrarme</Link></li>
                   
                </ul>
            </nav> 
        </header>
    );
}

export default Header;
