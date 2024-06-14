import axios from 'axios';

//Integração do backend no front criando chamadas da api
const PropriedadesAPI = {

  //retorna lista de propriedades
  obterListaPropriedades: async function () {
    try {
      const url = 'http://localhost:5000/propriedades';

      const retorno = await axios.get(url)
        .then((response) => {
          console.log('Response -> ', response);
          return response.data;
        })
        .catch((error) => {
          throw error;
        });
      return retorno;
    } catch (err) {
      throw err;
    }
  },

  //Cria uma nova propriedade no backend
  adicionarPropriedade: async function (novaPropriedade) {
    try {
      const url = 'http://localhost:5000/propriedades';

      const retorno = await axios.post(url, novaPropriedade)
        .then((response) => {
          console.log('Response -> ', response);
          return response.data;
        })
        .catch((error) => {
          throw error;
        });
      return retorno;
    } catch (err) {
      throw err;
    }
  },

  //retorna detalhes da propriedade de id de entrada
  obterDetalhesPropriedade: async function (id) {
    try {
      const url = `http://localhost:5000/propriedades/${id}`;

      const retorno = await axios.get(url)
        .then((response) => {
          console.log('Response -> ', response);
          return response.data;
        })
        .catch((error) => {
          throw error;
        });
      return retorno;
    } catch (err) {
      throw err;
    }
  },

};
export default PropriedadesAPI;