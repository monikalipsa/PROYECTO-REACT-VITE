
import Boton from '../../components/boton/Boton';
import './Formulario.css'
import React, { useState } from 'react';


export default function Formulario () {
  const [nombre, setNombre] = useState ("");
 const [lugar, setLugar] = useState ("");
  return (
      <>
     
      
       <div className="forms">
       <h3>INGRESAR</h3>
       <form>
                          <input  type= "text"  placeholder="Ingresa tu mail" id= "nombre"   name="nombre"  value={nombre}   onChange={(e) => setNombre (e.target.value)}/>
                          <input  type= "text"  placeholder="Contraseña" id= "nombre"   name="nombre"  value={nombre}   onChange={(e) => setNombre (e.target.value)}/>
                  
                          <Boton className="boton" texto= "Ingresar" />
                  
                     
                      
                     
           
          
          
                <p>Donde vivis: </p>
                 <div className='ubicacion'>


                  <input type="radio" id= "Caba" className='3' name="lugar" value={lugar} onChange={(e) => setLugar (e.target.value)} 
                  defaultChecked />
                  <label htmlFor="">Capital Federal</label>
                  <input type="radio" id= "Gba" className='1' name="lugar" value="Gba" onChange={(e) => setLugar (e.target.value)}  />
                  <label htmlFor="">GBA</label>
                  <input type="radio" id= "Otra Pcia" className='2' name="lugar" value="Otra Pcia" onChange={(e) => setLugar (e.target.value)}  />
                  <label htmlFor="">Otra Pcia</label>
                  </div>
                 
 </form>
       </div>

    
      </>

  );
}