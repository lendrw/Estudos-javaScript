const { nome, sobrenome, falaNome } = require('./mod');
console.log(nome, sobrenome);
//console.log(falaNome());

const { Pessoa } = require('./mod2');
const p1 = new Pessoa('Luiz');
//console.log(p1);

const axios = require('axios');
axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
    .then(response => console.log(response.data))
    .catch(err => console.log(err));