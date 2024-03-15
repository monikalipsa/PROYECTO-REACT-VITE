import React, { useState } from 'react';
import PropTypes from 'prop-types'; 
import Imagenes from './Imagenes';

import './Producto.css';

function Producto(props) {
    const [mostrarDetalles, setMostrarDetalles] = useState(false);

    const toggleDetalles = () => {
        setMostrarDetalles(!mostrarDetalles);
    };

    return (


     <section className="seccion-producto">

        <div className='tarjeta'>
            <div className='info'>
               <p>{props.nombre}</p>
               <h4>{props.tema}</h4>
               <h3>{props.precio}</h3>
               </div>
               <div className="contenedor-img">
                <img src={Imagenes[props.imagen]} alt={props.nombre} />
                <div>
              <button className='detalles' onClick={toggleDetalles}>Ver Detalle</button>
                </div>
            </div>
     
            </div>


            <br/>


            {mostrarDetalles && (
                <div className="cartel">
                    <div className="cartel-contenido">
                        <button onClick={toggleDetalles} className="cerrar">CERRAR</button>                                     
                    <h4>CAPACIDAD: {props.capacidad}</h4>
                    <h4>MATERIAL: {props.material}</h4>
                    <h4>ALTURA: {props.altura}</h4>
                    <h4>ANCHO: {props.ancho}</h4>
                    <h4>PROFUNDIDAD: {props.profundidad}</h4>
                       
                    </div>
                </div>
            )}
        </section>

        
    );
}

Producto.propTypes = {
    nombre: PropTypes.string.isRequired,
    colores: PropTypes.string,
    tema: PropTypes.string,
    precio: PropTypes.string,
    imagen: PropTypes.string,
};

export default Producto;
