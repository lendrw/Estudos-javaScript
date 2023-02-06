const express = require('express');
const app = express();

app.use(express.urlencoded(
        { 
        extended: true
        }
    )
);

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome do cliente: <input type="text" name="nome"></input>
    <button>Enviar</button>
    </form>
    `);
});

app.get('/testes/:idUsuarios?/:parametro?', (req, res) => {
    //http://localhost:3000/testes/?nome=Leandro&sobrenome=Freire&idade=21
    //http://localhost:3000/testes/?nome=Leandro&sobrenome=Freire&idade=21&facebookprofile=tal
    console.log(req.params);
    console.log(req.query);
    res.send(req.query.facebookprofile);
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.send(`O que você me enviou foi: ${req.body.nome}`);
}
);

app.listen(3000, () => {
    console.log('servidor rodando na porta 3000');
});