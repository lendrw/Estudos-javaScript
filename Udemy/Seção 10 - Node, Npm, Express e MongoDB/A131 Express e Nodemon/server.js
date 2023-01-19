const express = require('express');
const app = express();


// CRUD -> CREATE, READ, UPDATE, DELETE
//          POST    GET    PUT    DELETE

// HTTP://meusite.com/ <- GET -> entregue a página
// HTTP://meusite.com/sobre <- GET -> entregue a página /sobre
// HTTP://meusite.com/contato <- GET -> entregue a página /contato

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

app.get('/contato', (req, res) => {
    res.send("Obrigado por entrar em contato");
}
);

app.listen(3000, () => {
    console.log('servidor rodando na porta 3000');
});