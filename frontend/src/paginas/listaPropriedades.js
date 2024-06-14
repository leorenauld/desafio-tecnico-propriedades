import React, { useEffect, useState } from 'react';
import API from "../API/APIs"
import GradePropriedades from '../componentes/gradePropriedades';
import { Link } from 'react-router-dom';
import './listaPropriedades.css';

const ListaPropriedades = () => {
  const [propriedades, setPropriedades] = useState([]);

  useEffect(() => {
    obterListaPropriedades();
  }, []);

  const obterListaPropriedades = async () => {
    try {
      let lista = await API.obterListaPropriedades();
      setPropriedades(lista);
      console.log(lista);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="title" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h1>Propriedades</h1>
        <Link to="/nova-propriedade" className="btn btn-primary">Nova Propriedade</Link>
      </div>
        <GradePropriedades propriedades={propriedades} />
    </div>
  );
};

export default ListaPropriedades;
