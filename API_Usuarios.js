const express = require('express');
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


let usuarios = [];


app.post('/usuarios', (req, res) => {
  const { nome, email, senha } = req.body;
  usuarios.push({ nome, email, senha });
  res.json(usuarios);
});


app.get('/usuarios', (req, res) => {
  res.json(usuarios);
});

app.get('/', (req, res) => {
  res.json("Ola");
});


app.delete('/usuarios', (req, res) => {
  const { email } = req.body;
  usuarios = usuarios.filter(u => u.email !== email);
  res.json(usuarios);
});

app.put('/usuarios', (req,res) => {
  const { nome , email , senha } = req.body;
  let Usuarios = usuarios.map (u => u.nome  === nome ? { nome , email , senha } : u);
  res.json(Usuarios);
})


app.listen(3001, () => {
console.log('Servidor rodando em http://localhost:3001');
});
