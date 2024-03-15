
// import './App.css'
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';
// import Header from './components/header/Header';
// import Footer from './components/footer/Footer';
// import Seccion from './components/seccion/Seccion';
//  import ListaCasas from './components/casas/ListaCasas'
// import Menu from './components/menu/Menu';
// import Escuela from './components/escuela/Escuela'
// import Artistica from './components/artistica/Artistica';
// import Galeria from './components/galeria/Galeria';
// // ______________________________________________________________

// import Ingresar from './components/formulario/Login';
// import Registrarme from './components/formulario/Registro';

// // _____________________________________________________________________

// function App() {

//   return (
//     <div className="contenedor">
//        <Router>
//          <Header/>
//          <Menu/>   
//          <Routes>
//               <Route path="" element ={<Seccion /> } />
//               <Route path="/" element ={<Seccion /> } />
//               <Route path="/escuela" element ={<Escuela/> } />
//               <Route path="/artistica" element ={<Artistica/> } />
//               <Route path="/tecnica" element ={<ListaCasas/> } />
//               <Route path="/galeria" element ={<Galeria/> } />
// {/* ___________________________________________________________ */}
//               <Route path="/ingresar" element ={<Ingresar/> } />
//               <Route path="/registrarme" element ={<Registrarme/> } />
               
         

//           </Routes>     
//          <Footer/>
//        </Router>

//     </div>
//   );
// }

// export default App;


import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Seccion from './components/seccion/Seccion';
import ListaCasas from './components/casas/ListaCasas';
import Menu from './components/menu/Menu';
import Productos from './components/productos/ListaProductos';
import Artistica from './components/artistica/Artistica';
import Ingresar from './components/formulario/Login';
import Registrarme from './components/formulario/Registro';
import ListaProductos from './components/productos/ListaProductos';

function App() {
  return (
    <div className="contenedor">
      <Router>
        <Header />
        <Menu />
        <Routes>
          <Route path="/" element={<Seccion />} />
          <Route path="/home" element={<Seccion />} />
          <Route path="/productos" element={<ListaProductos />} />
          <Route path="/artistica" element={<Artistica />} />
          <Route path="/tecnica" element={<ListaCasas />} />    
          <Route path="/ingresar" element={<Ingresar />} />
          <Route path="/registrarme" element={<Registrarme />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
