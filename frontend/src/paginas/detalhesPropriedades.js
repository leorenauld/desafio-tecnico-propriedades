import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from "../API/APIs"
import './detalhesPropriedades.css';

const DetalhesPropriedade = () => {
  const { id } = useParams(); //id selecionado pelo usuario
  const [propriedade, setPropriedade] = useState(null);

  useEffect(() => {
    obterDetalhesPropriedade();
  }, []);

  const obterDetalhesPropriedade = async () => {
    try {
      let item = await API.obterDetalhesPropriedade(id);
      setPropriedade(item);
      console.log(item);
    } catch (error) {
      console.error(error);
    }
  };

  //trecho para evitar erro na aplicação antes da chegada dos dados
  if (!propriedade) {
    return <div></div>;
  }

  return (
    <div className="detalhes-propriedade">
      <div className="imagem-container">
      <img src={propriedade.imageUrl.startsWith('/fotos/') ? `http://localhost:5000${propriedade.imageUrl}` : `${propriedade.imageUrl}`} alt={propriedade.nome} className="imagem-detalhe-propriedade" />
      </div>
      <div className="info-container">
        <h2>{propriedade.nome}</h2>
        <p><strong>Bairro:</strong> {propriedade.bairro}</p>
        <p><strong>Cidade:</strong> {propriedade.cidade}</p>
        <p><strong>Preço:</strong> R${propriedade.valor.toLocaleString()}</p>
        <p className="descricao">{propriedade.descricao}</p>
      </div>
    </div>
  );
};

export default DetalhesPropriedade;