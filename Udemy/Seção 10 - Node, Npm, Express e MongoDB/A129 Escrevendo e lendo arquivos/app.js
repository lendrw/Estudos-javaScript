const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'arquivo.json');
const escreve = require('./modules/escreve');
const ler = require('./modules/ler');


/* const pessoas = [
    {nome: 'Maria'},
    {nome: 'João'},
    {nome: 'Carlos'}
];

const json = JSON.stringify(pessoas, '', 2);
escreve(caminhoArquivo, json); */

async function lerArquivo(caminho) {
    const dados = await ler(caminho);
    renderizaDados(dados);

}

const dadosArquivo = lerArquivo(caminhoArquivo)
.then(dados => console.log(dados));

function renderizaDados(dados) {
    dados = JSON.parse(dados);
    dados.forEach(val => console.log(val.nome));
}

lerArquivo(caminhoArquivo);