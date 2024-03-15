   import './Seccion.css';
   import Slider from '../slider/Slider'
// import Boton from '../boton/Boton';



  function Seccion (){
   

      return (
          <section className='seccion'>
         <h2>La Familia de Isateo</h2>

         <p>Somos una empresa familiar que prioriza una buena experiencia para nuestros clientes</p>
       
            <Slider/>

       </section>
      )
     }
     export default Seccion;
    