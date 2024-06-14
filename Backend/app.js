const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.use(express.static('public'));

//lista de propriedades iniciais para exibição
let propriedades = [
    {
        id: "1",
        nome: "Casa 1",
        bairro: "Barra",
        cidade: "Rio de Janeiro",
        valor: 2500000,
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        imageUrl: "/fotos/casa_template_1.jpg"
      },
      {
        id: "2",
        nome: "Casa 2",
        bairro: "Recreio",
        cidade: "Rio de Janeiro",
        valor: 1500000,
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus varius velit eu aliquet posuere. Sed facilisis quam eu hendrerit pretium. Nunc aliquet dignissim imperdiet. Vivamus ut quam tempor, sagittis leo et, dignissim sapien. Sed sed dolor eu nibh finibus aliquet non rhoncus nisl. Donec commodo arcu eget massa rutrum pulvinar",
        imageUrl: "/fotos/casa_template_2.jpg"
      },
      {
        id: "3",
        nome: "Casa 3",
        bairro: "Freguesia",
        cidade: "Rio de Janeiro",
        valor: 1500000,
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        imageUrl: "/fotos/casa_template_3.jpg"
      },
      {
        id: "4",
        nome: "Apartamento",
        bairro: "Centro",
        cidade: "Rio de Janeiro",
        valor: 3500000,
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus varius velit eu aliquet posuere. Sed facilisis quam eu hendrerit pretium. Nunc aliquet dignissim imperdiet. Vivamus ut quam tempor, sagittis leo et, dignissim sapien. Sed sed dolor eu nibh finibus aliquet non rhoncus nisl. Donec commodo arcu eget massa rutrum pulvinar. Cras ac sagittis lorem. Curabitur eu sagittis mi, sed sollicitudin augue. Duis vestibulum metus aliquam lacus accumsan vulputate. Donec vel leo nec lectus vestibulum tristique. Maecenas iaculis auctor lobortis. Proin venenatis vitae tellus vel vestibulum. Cras id dignissim augue, sed feugiat lorem. Aenean posuere pulvinar urna, sed imperdiet nulla sagittis et.\n Mauris ultricies scelerisque pellentesque. Sed ornare blandit porttitor. Nulla nulla nisi, blandit ut massa maximus, rhoncus ultrices dolor. Aliquam erat volutpat. Sed feugiat, dolor sed interdum vulputate, massa purus lacinia erat, at feugiat ipsum diam ut orci. Nam interdum risus rutrum molestie vestibulum. Integer tincidunt mauris id sem condimentum ornare. Cras diam nunc, luctus sed viverra quis, fermentum at nisl. Suspendisse efficitur suscipit venenatis. Ut gravida lectus in tellus commodo scelerisque.",
        imageUrl: "/fotos/casa_template_4.jpg"
      }
];

//chamadas
//solicita lista de propriedades
app.get('/propriedades', (req, res) => {
    console.log(propriedades);
  res.json(propriedades);
});

//solicita detalhes de uma propriedade
app.get('/propriedades/:id', (req, res) => {
  const propriedade = propriedades.find(p => p.id === req.params.id);
  if (propriedade) {
    res.json(propriedade);
  } else {
    res.status(404).send('propriedade não encontrada');
  }
});

//envia uma nova propriedade
app.post('/propriedades', (req, res) => {
  const newPropriedade = { id: Date.now().toString(), ...req.body };
  propriedades.push(newPropriedade);
  res.status(201).json(newPropriedade);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
