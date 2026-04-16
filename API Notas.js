let boletim = [];


app.post('/notas', (req, res) => {
  const { nome, n1, n2, n3, n4 } = req.body;


  const media = (Number(n1)+Number(n2)+Number(n3)+Number(n4)) / 4;


  boletim.push({ nome, n1, n2, n3, n4, media });


  res.json(boletim);
});


app.get('/notas', (req, res) => {
  res.json(boletim);
});
