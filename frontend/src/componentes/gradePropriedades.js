import React from 'react';
import './gradePropriedades.css';
import { Link } from 'react-router-dom';

//componenete usado para exibir as propriedades em formato de grade
const GradePropriedades = ({ propriedades }) => {
  return (
    <div className="grade-propriedades">
      {propriedades.map(propriedade => (
        <Link key={propriedade.id} to={`/propriedades/${propriedade.id}`} style={{ textDecoration: 'none' }} className="card-propriedade">
            <img src={propriedade.imageUrl.startsWith('/fotos/') ? `http://localhost:5000${propriedade.imageUrl}` : `${propriedade.imageUrl}`} alt={propriedade.nome} className="imagem-propriedade" />
          <div className="detalhes-propriedades">
            <h2>{propriedade.nome}</h2>
            <p><strong>Bairro:</strong> {propriedade.bairro}</p>
            <p><strong>Cidade:</strong> {propriedade.cidade}</p>
            <p><strong>Preço:</strong> R${propriedade.valor?.toLocaleString()}</p>
            <p>{propriedade.descricao?.length > 100 ?
                `${propriedade.descricao.substring(0, 100)}...` : propriedade.descricao}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default GradePropriedades;
