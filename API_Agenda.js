let contatos = [];


app.post('/contatos', (req, res) => {
  contatos.push(req.body);
  res.json(contatos);
});


app.get('/contatos', (req, res) => {
  res.json(contatos);
});


app.post('/buscar', (req, res) => {
  const { nome } = req.body;
  const resultado = contatos.find(c => c.nome === nome);
  res.json(resultado || { mensagem: "Não encontrado" });
});
