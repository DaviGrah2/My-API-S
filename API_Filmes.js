let filmes = [];


app.post('/filmes', (req, res) => {
  const { titulo, genero, ano } = req.body;
  filmes.push({ titulo, genero, ano });
  res.json(filmes);
});


app.get('/filmes', (req, res) => {
  res.json(filmes);
});
