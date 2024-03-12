
import './App.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Seccion from './components/seccion/Seccion';
 import ListaCasas from './components/casas/ListaCasas'
import Menu from './components/menu/Menu';
import Escuela from './components/escuela/Escuela'
import Artistica from './components/artistica/Artistica';
// ______________________________________________________________

import Ingresar from './components/formulario/Login';
import Registrarme from './components/formulario/Registro';

// _____________________________________________________________________

function App() {

  return (
    <div className="contenedor">
       <Router>
         <Header/>
         <Menu/>   
         <Routes>
              <Route path="" element ={<Seccion /> } />
              <Route path="/" element ={<Seccion /> } />
              <Route path="/escuela" element ={<Escuela/> } />
              <Route path="/artistica" element ={<Artistica/> } />
              <Route path="/tecnica" element ={<ListaCasas/> } />
{/* ___________________________________________________________ */}
              <Route path="/ingresar" element ={<Ingresar/> } />
              <Route path="/registrarme" element ={<Registrarme/> } />

         

          </Routes>     
         <Footer/>
       </Router>

    </div>
  );
}

export default App;
