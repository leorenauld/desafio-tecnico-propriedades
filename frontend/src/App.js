import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListaPropriedades from './paginas/listaPropriedades';
import Header from './componentes/Header';
import DetalhesPropriedades from './paginas/detalhesPropriedades';
import NovaPropriedade from './paginas/novaPropriedade';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ListaPropriedades />} />
        <Route path="/propriedades/:id" element={<DetalhesPropriedades />} />
        <Route path="/nova-propriedade" element={<NovaPropriedade />} />
      </Routes>
    </Router>
  );
};

export default App;