import Casa from './Casa';
import casas from './datoCasas';


function ListaCasas(){
      return(
           <div>
            {casas.map ((casa,index) => (
                <Casa
                key = {index} 
                nombre = {casa.nombre} 
                valores = {casa.valores} 
                animal = {casa.animal} 
                colores = {casa.colores} 
                ubicacion = {casa.ubicacion} 
                imagen ={casa.imagen}

                />
            ))}
           </div>
      )

}
export default ListaCasas;