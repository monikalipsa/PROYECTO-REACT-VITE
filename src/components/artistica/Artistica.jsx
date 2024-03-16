import React, { useState } from 'react';
import PropTypes from 'prop-types'; 
import Imagen from './Imagen';

import './Artistica.css';

function Artistica(props) {
    const [mostrarDetalles, setMostrarDetalles] = useState(false);

    const toggleDetalles = () => {
        setMostrarDetalles(!mostrarDetalles);
    };

    return (


     <section className="seccion-artistica">

        <div className='tarjeta'>
            <div className='info'>
               <p>{props.nombre}</p>
               <h4>{props.tema}</h4>
               <h3>{props.precio}</h3>
               </div>
               <div className="contenedor-img">
                <img src={Imagen[props.imagen]} alt={props.nombre} />
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
                    <h4>MARCA: {props.marca}</h4>
                    <h4>UNIDADES: {props.unidades}</h4>
                    <h4>TIPO: {props.tipo}</h4>
                    <h4>MODELO: {props.modelo}</h4>
                    <h4>STOCK: {props.stock}</h4>
                    <h4>CODIGO: {props.codigo}</h4>
                    

                    
                       
                    </div>
                </div>
            )}
        </section>

        
    );
}

Artistica.propTypes = {
    nombre: PropTypes.string.isRequired,
    colores: PropTypes.string,
    tema: PropTypes.string,
    precio: PropTypes.string,
    imagen: PropTypes.string,
};

export default Artistica;