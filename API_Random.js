const express = require('express');
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let Random = [];


app.post('./random', (req, res) => {
  const { nome, artista } = req.body;
  Random.push({ nome, artista });
  res.json(Random);
});


app.get('./random', (req,res) => {
    res.json(Random);
});

app.get('./random', (req,res) => {
    res.json("Não está esqucendo de nada?");
});

app.delete('./random', (req,res) => {
    const { nome } = req.body;
    Random = Random.filter(m => m.nome !== nome);
    res.json(Random);

});

app.put('./random', (req,res) => {
    const { nome, artista } = req.body;
    const index = Random.findIndex(m => m.nome === nome);
    if (index !== -1) {
        Random[index].artista = artista;
    }
    res.json(Random);
});

app.listen(3001, () => {
    console.log('Servidor rodando em http://localhost:3001');
});