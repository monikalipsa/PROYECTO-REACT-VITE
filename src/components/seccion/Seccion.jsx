  import './Seccion.css';
import Boton from '../boton/Boton';

// // ______________________________________________________

 function Seccion (){
   
       const handlerClicBoton = () => {
       alert('Diste click en el boton');}

     return (
         <section className='seccion'>
        <h2>Informacion de Monikalipsa+Berlin</h2>

        <p>Estos frameworks brindan todas las características que necesitas para implementar y escalar tu aplicación en producción y están trabajando para respaldar nuestra visión de arquitectura full-stack. Todos los frameworks que recomendamos son de código abierto, con comunidades activas que brindan soporte, y pueden ser desplegados en tu propio servidor o en un proveedor de alojamiento. Si eres autor de un framework interesado en ser incluido en esta lista, por favor, háznoslo saber.
         es un framework completo de React. Es versátil y te permite crear aplicaciones React de cualquier tamaño, desde un blog mayormente estático</p>
       <Boton texto="Ingresa Aqui"/>
       <Boton texto="Ingresa Aqui" color="pink" onClick={handlerClicBoton}/>
        
      </section>
     )
 }

 export default Seccion;