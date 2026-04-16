const md5 = require('md5');


let logins = [];


app.post('/login', (req, res) => {
  const { nome, email, senha } = req.body;
  const senhaCriptografada = md5(senha);


  logins.push({ nome, email, senha: senhaCriptografada });


  res.json(logins);
});


app.get('/login', (req, res) => {
  res.json(logins);
});
