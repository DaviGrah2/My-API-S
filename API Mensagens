const express = require('express');
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


let mensagens = [];


app.post('/mensagens', (req, res) => {
  const { nome, texto } = req.body;
  mensagens.push({ nome, texto });
  res.json(mensagens);
});


app.get('/mensagens', (req, res) => {
  res.json(mensagens);
});

app.listen(3001, () => {
console.log('Servidor rodando em http://localhost:3001');
});
