//  import React, { useState } from 'react';
//  import Boton from '../../components/boton/Boton';
//  import './Registro.css';

 


 
//  function Registro() {
//      const [nombre, setNombre] = useState('');
//      const [apellido, setApellido] = useState('');
//      const [telefono, setTelefono] = useState('');
//      const [email, setEmail] = useState('');
//      const [sexo, setSexo] = useState('');
//      const [usuario, setUsuario] = useState('');
//      const [clave, setClave] = useState('');
//      const [repetirClave, setRepetirClave] = useState('');

//      const handleTelefonoChange = (e) => {
//          const formattedValue = e.target.value.replace(/[^0-9]/g, '');
//          setTelefono(formattedValue);
//      };

     

//     //  const handlerClicBoton = () => {
//     //      alert('Tu registro fué exitoso');}

//      const handleSubmit = (e) => {
//          e.preventDefault();
//          console.log('Formulario enviado');
//      };

//      return (
//          <section className="registrarme">

//              <h3>REGISTRATE</h3>

//             <form onSubmit={handleSubmit} name="form_contacto" id="form_contacto">
//                  <div>
//                  <label for="nombre">Nombre : </label>
//                 <input type="text" id="nombre" name="nombre" class="input-field"/>
//                 <div id="error_nombre" className="error-message"></div>
//                  </div>
//                  <div>
//                      <label htmlFor="apellido">Apellido:</label>
//                      <input type="text" id="apellido" name="apellido" value={apellido} onChange={(e) => setApellido(e.target.value)} className="input-field" required />
//                      <div id="error_nombre" className="error-message"></div>
//                  </div>                 <div>
//                      <label htmlFor="telefono">Teléfono:</label>
//                      <input type="tel" id="telefono" name="telefono" value={telefono} onChange={handleTelefonoChange} className="input-field" oninput="this.value = this.value.replace(/[^0-9]/g, '');" required />
//                      <div id="error_nombre" className="error-message"></div>
//                  </div>
//                  <div>
//                      <label htmlFor="email">Correo Electrónico:</label>
//                      <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="input-field" required />
//                      <div id="error_nombre" className="error-message"></div>
//                  </div>
//                  <div>
//                      <label htmlFor="sexo">Sexo:</label>
//                      <select id="sexo" name="sexo" value={sexo} onChange={(e) => setSexo(e.target.value)} className="input-field" required>
//                          <option value="">Seleccionar</option>
//                          <option value="masculino">Masculino</option>
//                        <option value="femenino">Femenino</option>
//                      </select>
//                      <div id="error_nombre" className="error-message"></div>
//                  </div>
//                  <div>
//                      <label htmlFor="usuario">Usuario:</label>
//                      <input type="text" id="usuario" name="usuario" value={usuario} onChange={(e) => setUsuario(e.target.value)} className="input-field" required />
//                      <div id="error_nombre" className="error-message"></div>
//                  </div>
//                  <div>
//                      <label htmlFor="clave">Clave:</label>
//                    <input type="password" id="clave" name="clave" value={clave} onChange={(e) => setClave(e.target.value)} className="input-field" required />
//                    <div id="error_nombre" className="error-message"></div>
//                  </div>
//                  <div>
//                      <label htmlFor="repetirClave">Repetir Clave:</label>
//                      <input type="password" id="repetirClave" name="repetirClave" value={repetirClave} onChange={(e) => setRepetirClave(e.target.value)} className="input-field" required />
//                      <div id="error_nombre" className="error-message"></div>
//                  </div>

//                   <Boton className="boton" color="pink" texto= "Registrarme"  />      
//              </form>
//          </section>
//      );
//  }

//  export default Registro;
import React, { useState } from 'react';

function FormularioContacto() {
    const [mensaje, setMensaje] = useState('');
    const [camposObligatoriosError, setCamposObligatoriosError] = useState('');

    const validarCampo = (elemento) => {
        const campo = elemento.value.trim();
        const error = document.getElementById('error_' + elemento.id);

        if (!campo) {
            error.innerText = 'Este campo es obligatorio';
            elemento.classList.add('error');
            return false;
        } else {
            error.innerText = '';
            elemento.classList.remove('error');
            return true;
        }
    };

    const validarFormulario = () => {
        const camposObligatorios = ['nombre', 'apellido', 'email', 'telefono'];
        let camposIncompletos = false;

        camposObligatorios.forEach(campo => {
            if (!validarCampo(document.getElementById(campo))) {
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
        // Aquí iría tu lógica de enviar el formulario
        // Por ejemplo, utilizando fetch o axios para enviar los datos a un servidor
        // Y luego mostrar el mensaje de éxito o error recibido del servidor
        setMensaje('Mensaje enviado correctamente');
        resetearFormulario();
    };

    const resetearFormulario = () => {
        document.getElementById('form_contacto').reset();
    };

    return (
        <section className="formulario">
            <form id="form_contacto">
                <div>
                    <label htmlFor="nombre">Nombre : </label>
                    <input type="text" id="nombre" name="nombre" className="input-field" />
                    <div id="error_nombre" className="error-message"></div>
                </div>
                <div>
                    <label htmlFor="apellido">Apellido : </label>
                    <input type="text" id="apellido" name="apellido" className="input-field" />
                    <div id="error_apellido" className="error-message"></div>
                </div>
                <div>
                    <label htmlFor="telefono">Teléfono :</label>
                    <input type="tel" id="telefono" name="telefono" className="input-field" />
                </div>
                <div>
                    <label htmlFor="email">Email :</label>
                    <input type="text" id="email" name="email" className="input-field" />
                    <div id="error_email" className="error-message"></div>
                </div>
                <div>
                    <label htmlFor="tipoContacto">Sexo :</label>
                    <select id="tipoContacto" name="tipoContacto" className="input-field">
                        <option value="soporte">Femenino</option>
                        <option value="ventas">Masculino</option>
                    </select>
                    <div id="error_tipoContacto" className="error-message"></div>
                </div>
                
                <div>
                    <label htmlFor="apellido">Usuario: </label>
                    <input type="text" id="usuario" name="usuario" className="input-field" />
                    <div id="error_usuario" className="error-message"></div>
                </div>
                <div>
                    <label htmlFor="apellido">Clave : </label>
                    <input type="text" id="clave" name="clave" className="input-field" />
                    <div id="error_clave" className="error-message"></div>
                </div>  <div>
                    <label htmlFor="apellido">Repetir Clave : </label>
                    <input type="text" id="repetirClave" name="repetirClave" className="input-field" />
                    <div id="error_repetirClave" className="error-message"></div>
                </div>
                
                
                <div id="camposObligatorios" className="error-message">{camposObligatoriosError}</div>
                <button type="button" id="enviarBtn" className="submit-button" onClick={() => { setCamposObligatoriosError(''); validarFormulario(); }}>Enviar</button>
                <div id="mensaje" className="mensaje">{mensaje}</div>
            </form>
            <br />
        </section>
    );
}

export default FormularioContacto;
