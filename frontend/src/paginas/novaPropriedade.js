import React, { useState } from 'react';
import API from '../API/APIs';
import './novaPropriedade.css';

const NovaPropriedade = () => {
  const [nome, setNome] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [valor, setValor] = useState('');
  const [descricao, setDescricao] = useState('');
  const [imagemUrl, setImagemUrl] = useState('');
  const [imagemFile, setImagemFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    //formato do array no backend
    const novaPropriedade = {
      nome,
      bairro,
      cidade,
      valor: parseFloat(valor),
      descricao,
      imageUrl: imagemUrl,
    };

    try {
      await API.adicionarPropriedade(novaPropriedade);
      alert('Propriedade adicionada com sucesso!');
      window.location.href = '/';
    } catch (error) {
      console.error('Erro ao adicionar propriedade:', error);
      alert('Ocorreu um erro ao adicionar a propriedade. Verifique o console para mais detalhes.');
    }
  };

  const handleFileChange = (e) => { //handler da seleção de imagem via arquivo
    const file = e.target.files[0];
    if (file) {
      setImagemFile(file);

      // Para pré-visualização da imagem
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagemUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="form-container">
      <h1>Adicionar Nova Propriedade</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nome:</label>
          <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} required />
        </div>
        
        <div className="form-group">
          <label>Bairro:</label>
          <input type="text" value={bairro} onChange={(e) => setBairro(e.target.value)} required />
        </div>
        
        <div className="form-group">
          <label>Cidade:</label>
          <input type="text" value={cidade} onChange={(e) => setCidade(e.target.value)} required />
        </div>
        
        <div className="form-group">
          <label>Valor:</label>
          <input type="number" value={valor} onChange={(e) => setValor(e.target.value)} required />
        </div>
        
        <div className="form-group">
          <label>Descrição:</label>
          <textarea value={descricao} onChange={(e) => setDescricao(e.target.value)} required />
        </div>
        
        <div className="form-group">
          <label>Imagem:</label>
          <input type="file" accept="image/*" onChange={handleFileChange} />
          {imagemUrl && <img src={imagemUrl} alt="Preview" style={{ maxWidth: '100%', marginTop: '10px' }} />}
        </div>
        
        <div className="button-container">
          <button type="submit">Adicionar Propriedade</button>
        </div>
      </form>
    </div>
  );
};

export default NovaPropriedade;
