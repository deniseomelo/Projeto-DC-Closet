import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';


import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './pages/Home';
import Login from './pages/Login';
import Menu from './pages/Menu';
import CadastroProduto from './pages/CadastroProduto';
import VisualizarProduto from './pages/VisualizarProduto';
import NaoEncontrado from './pages/NaoEncontrado';
import EditarProduto from './component/EditarProduto/index';
import CadastroUsuario from './pages/CadastroUsuario';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        
        <Route path='/' element={< App/>} />
        <Route path='/Login' element={< Login/>} />
        <Route path='/Menu' element={<Menu/>}/>
        <Route path='/Cadastro-Produto' element={<CadastroProduto/>}/>
        <Route path='/Visualizar-Produto' element={<VisualizarProduto/>}/>
        <Route path="/editar-produto/:codigo" element={<EditarProduto />} />
        <Route path='/Cadastro-Usuario' element={<CadastroUsuario/>}/>
        
        
        <Route path='/*' element={<NaoEncontrado />} />

        

        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);