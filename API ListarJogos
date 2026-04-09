const express = require('express');
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let ListarJogos = [];


app.post('/ListarJogos', (req, res) => {
  const { nome, tema, preco , descrição } = req.body;
  ListarJogos.push({ nome, tema, preco , descrição });
  res.json(ListarJogos);
});


app.get('/ListarJogos', (req, res) => {
  res.json(ListarJogos);
});

app.get('/', (req, res) => {
  res.json("Olá novo tester !!");
});


app.delete('/ListarJogos', (req, res) => {
  const { nome } = req.body;
  ListarJogos = ListarJogos.filter(l => l.nome !== nome);
  res.json(ListarJogos);
});

app.listen(3001, () => {
console.log('Servidor rodando em http://localhost:3001');
});
