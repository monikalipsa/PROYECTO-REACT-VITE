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

                />
            ))}
           </div>
      )

}
export default ListaProductos;