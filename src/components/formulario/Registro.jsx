// import React, { useState } from 'react';
// import Boton from '../../components/boton/Boton';
// import './Registro.css';

// function Registro() {
//     const [nombre, setNombre] = useState('');
//     const [apellido, setApellido] = useState('');
//     const [telefono, setTelefono] = useState('');
//     const [email, setEmail] = useState('');
//     const [sexo, setSexo] = useState('');
//     const [usuario, setUsuario] = useState('');
//     const [clave, setClave] = useState('');
//     const [repetirClave, setRepetirClave] = useState('');

//     const handleTelefonoChange = (e) => {
//         const formattedValue = e.target.value.replace(/[^0-9]/g, '');
//         setTelefono(formattedValue);
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Aquí puedes agregar la lógica para enviar los datos del formulario
//     };

//     return (
//         <section className="registrarme">
//             <h3>REGISTRATE</h3>
//             <form onSubmit={handleSubmit} name="form_contacto" id="form_contacto">
//                 <div>
//                     <label htmlFor="nombre">Nombre:</label>
//                     <input type="text" id="nombre" name="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} className="input-field" required />
//                 </div>
//                 <div>
//                     <label htmlFor="apellido">Apellido:</label>
//                     <input type="text" id="apellido" name="apellido" value={apellido} onChange={(e) => setApellido(e.target.value)} className="input-field" required />
//                 </div>
//                 <div>
//                     <label htmlFor="telefono">Teléfono:</label>
//                     <input type="tel" id="telefono" name="telefono" value={telefono} onChange={handleTelefonoChange} className="input-field" required />
//                 </div>
//                 <div>
//                     <label htmlFor="email">Correo Electrónico:</label>
//                     <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="input-field" required />
//                 </div>
//                 <div>
//                     <label htmlFor="sexo">Sexo:</label>
//                     <select id="sexo" name="sexo" value={sexo} onChange={(e) => setSexo(e.target.value)} className="input-field" required>
//                         <option value="">Seleccionar</option>
//                         <option value="masculino">Masculino</option>
//                         <option value="femenino">Femenino</option>
//                     </select>
//                 </div>
//                 <div>
//                     <label htmlFor="usuario">Usuario:</label>
//                     <input type="text" id="usuario" name="usuario" value={usuario} onChange={(e) => setUsuario(e.target.value)} className="input-field" required />
//                 </div>
//                 <div>
//                     <label htmlFor="clave">Clave:</label>
//                     <input type="password" id="clave" name="clave" value={clave} onChange={(e) => setClave(e.target.value)} className="input-field" required />
//                 </div>
//                 <div>
//                     <label htmlFor="repetirClave">Repetir Clave:</label>
//                     <input type="password" id="repetirClave" name="repetirClave" value={repetirClave} onChange={(e) => setRepetirClave(e.target.value)} className="input-field" required />
//                 </div>
//                 <Boton className="boton" texto="Registrarme" />
//             </form>
//         </section>
//     );
// }

// export default Registro;
