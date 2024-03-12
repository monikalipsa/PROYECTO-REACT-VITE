import PropTypes from "prop-types";
import Imagenes from "./Imagenes";
import './Casa.css';


function Casa (props){
    return(
        <section className="seccion-casa">  
            <h2> {props.nombre} </h2>
            <p> {props.valores} </p>
            <p> {props.animal} </p>
            <p> {props.colores} </p>
            <p> {props.ubicacion} </p>              
            <div className="contenedor-img">
                 <img src={Imagenes[props.imagen]}  alt= {props.nombre} />
            </div>
        </section>
    );
    }
    
    Casa.propTypes = {
        nombre: PropTypes.string.isRequired,
        valores: PropTypes.string,
        animal: PropTypes.string,
        colores: PropTypes.string,
        ubicacion: PropTypes.string,
        imagen:PropTypes.string,


};
export default Casa;