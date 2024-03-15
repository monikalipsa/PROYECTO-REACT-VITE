

  import './Registro.css';


// import Boton from '../boton/Boton';
import React, { useState } from 'react';

function Registro() {
    const [mensaje, setMensaje] = useState('');
    const [camposObligatoriosError, setCamposObligatoriosError] = useState('');
    const [errores, setErrores] = useState({
        nombre: '',
        apellido: '',
        email: '',
        telefono: '',
        usuario: '',
        clave: '',
        repetirClave: ''
    });

    const validarCampo = (campo, valor) => {
        if (!valor.trim()) {
            setErrores(prevState => ({
                ...prevState,
                [campo]: 'Este campo es obligatorio'
            }));
            return false;
        } else {
            setErrores(prevState => ({
                ...prevState,
                [campo]: ''
            }));
            return true;
        }
    };

    const validarFormulario = () => {
        const camposObligatorios = ['nombre', 'apellido', 'email', 'telefono', 'usuario', 'clave', 'repetirClave'];
        let camposIncompletos = false;

        camposObligatorios.forEach(campo => {
            const valor = document.getElementById(campo).value;
            if (!validarCampo(campo, valor)) {
                camposIncompletos = true;
            }
        });

        if (!camposIncompletos) {
            enviarFormulario();
        } else {
            setCamposObligatoriosError('Campos obligatorios incompletos');
        }
    };

    const enviarFormulario = () => {
        setMensaje('Registro correcto');
        resetearFormulario();
    };

    const resetearFormulario = () => {
        document.getElementById('form_contacto').reset();
    };

     const handlerClicBoton = () => {
         alert('INGRESANDO');}
    
    return (
        <section className="formulario">
              <h3>REGISTRATE</h3>
            <form >
                <div>
                    <label htmlFor="nombre">Nombre : </label>
                    <input type="text" id="nombre" name="nombre" className="input-field" onBlur={(e) => validarCampo(e.target.name, e.target.value)} />
                    <div className="error-message">{errores.nombre}</div>
                </div>
                <div>
                    <label htmlFor="apellido">Apellido : </label>
                    <input type="text" id="apellido" name="apellido" className="input-field" onBlur={(e) => validarCampo(e.target.name, e.target.value)} />
                    <div className="error-message">{errores.apellido}</div>
                </div>
                <div>
                    <label htmlFor="telefono">Teléfono :</label>
                    <input type="tel" id="telefono" name="telefono" className="input-field" />
                </div>
                <br />
                <div>
                    <label htmlFor="email">Email :</label>
                    <input type="text" id="email" name="email" className="input-field" onBlur={(e) => validarCampo(e.target.name, e.target.value)} />
                    <div className="error-message">{errores.email}</div>
                </div>
                <div>
                    <label htmlFor="usuario">Usuario :</label>
                    <input type="text" id="usuario" name="usuario" className="input-field" onBlur={(e) => validarCampo(e.target.name, e.target.value)} />
                    <div className="error-message">{errores.usuario}</div>
                </div>
                <div>
                    <label htmlFor="clave">Clave :</label>
                    <input type="password" id="clave" name="clave" className="input-field" onBlur={(e) => validarCampo(e.target.name, e.target.value)} />
                    <div className="error-message">{errores.clave}</div>
                </div>
                <div>
                    <label htmlFor="repetirClave">Repetir Clave :</label>
                    <input type="password" id="repetirClave" name="repetirClave" className="input-field" onBlur={(e) => validarCampo(e.target.name, e.target.value)} />
                    <div className="error-message">{errores.repetirClave}</div>
                </div>
                <div id="camposObligatorios" className="error-message">{camposObligatoriosError}</div>

                 <button type="button" id="enviarBtn" className="submit-button" onClick={() => { setCamposObligatoriosError(''); validarFormulario(); }}>Registrarme</button> 

                {/* <div id="mensaje" className="mensaje">{mensaje}</div> */}
            </form>
            <br />
        </section>
    );
}

export default Registro;
