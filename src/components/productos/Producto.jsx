import PropTypes from "prop-types";
import Imagenes from "./Imagenes";
// import './Producto.css';

import './Producto.css'

function Producto (props){
    return(
        <section className="seccion-producto">  
            <h2> {props.nombre} </h2>
            <p> {props.colores} </p>
            <p> {props.tema} </p>    
            <h3> {props.precio} </h3>          
            <div className="contenedor-img">
                 <img src={Imagenes[props.imagen]}  alt= {props.nombre} />
            </div>
        </section>
    );
    }
    
    Producto.propTypes = {
        nombre: PropTypes.string.isRequired,
        colores: PropTypes.string,
        tema: PropTypes.string,
        precio: PropTypes.string,
        imagen:PropTypes.string,


};
export default Producto;