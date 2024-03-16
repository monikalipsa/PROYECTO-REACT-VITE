import { Link } from "react-router-dom";
import './Menu.css'




const Menu = () => {

    return(
         <nav className= "menu">
           <ul>
               <li><Link to= "/home">Home</Link></li>
               <li><Link to= "/mochilas"> Mochilas </Link></li>
               <li><Link to= "/artistica">Artística</Link></li>
            
               
           </ul>
           
         </nav>
    )
}
export default Menu;