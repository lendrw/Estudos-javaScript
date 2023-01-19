const express = require('express');
const app = express();



app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome: <input type="text"></input>
    <button>Enviar</button>
    </form>
    `);
});

app.get('/contato', (req, res) => {
    res.send("Recebi o formulário");
}
);

app.listen(3000, () => {
    console.log('servidor rodando na porta 3000');
});