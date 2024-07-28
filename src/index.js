import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home/App';
import Pagina404 from './Pagina404';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} exact />
      <Route path="/cadastro/video" element={<CadastroVideo />} />
      <Route path="/cadastro/categoria" element={<CadastroCategoria />} />
      <Route path="*" element={<Pagina404 />} />
    </Routes>
  </BrowserRouter>
);
