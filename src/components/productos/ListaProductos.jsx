import Producto from './Producto';
import productos from './datoProductos';


function ListaProductos(){
      return(
           <div>
            {productos.map ((producto,index) => (
                <Producto
                key = {index} 
                nombre = {producto.nombre} 
                colores = {producto.colores} 
                tema = {producto.tema}
                precio = {producto.precio} 
                imagen ={producto.imagen}
                capacidad ={producto.capacidad}
                material ={producto.material}
                altura ={producto.altura}
                ancho ={producto.ancho}
                profundidad ={producto.profundidad}
                stock ={producto.stock}
              codigo ={producto.codigo}

                

                />
                
            ))}
            
           </div>
      )

}
export default ListaProductos;