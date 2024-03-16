import Artistica from './Artistica';
import artisticas from './datoArtisticas';


function ListaArtisticas(){
      return(
           <div>
            {artisticas.map ((artistica,index) => (
                <Artistica
                key = {index} 
                nombre = {artistica.nombre} 
                marca = {artistica.marca} 
                precio = {artistica.precio} 
                color= {artistica.color} 
                imagen ={artistica.imagen}
                unidades ={artistica.unidades}
                tipo ={artistica.tipo}
                modelo ={artistica.modelo}
                stock ={artistica.stock}
                codigo ={artistica.codigo}

                />
            ))}
           </div>
      )

}
export default ListaArtisticas;