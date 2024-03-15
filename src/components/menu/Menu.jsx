import { Link } from "react-router-dom";
import './Menu.css'




const Menu = () => {

    return(
         <nav className= "menu">
           <ul>
               <li><Link to= "/home">Home</Link></li>
               <li><Link to= "/escuela"> Escuela </Link></li>
               <li><Link to= "/artistica">Artística</Link></li>
               <li><Link to= "/tecnica"> Técnica </Link></li>
               <li><Link to= "/insumos">Galeria</Link></li>
               
           </ul>
           
         </nav>
    )
}
export default Menu;