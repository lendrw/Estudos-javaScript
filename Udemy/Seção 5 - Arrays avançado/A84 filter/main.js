// filter, map, reduce
//filter sempre retorna um array com a mesma quantidade de elementos ou menos
// retorne os números maiores que 10

const numeros = [10, 30, 23, 1, 2, 3, 4, 5, 79, 65];
const numerosFiltrados = numeros.filter(valor => valor > 10);
                                //arrow function simplificada

//a função vai iterar lendo cada valor do array
// a função permite a "passagem" dos valores que retornam true

//console.log(numerosFiltrados);







//retorne as pessoas cujo nome possui 5 letras ou mais
//retorne as pessoas com mais de 50 anos
//retorne as pessoas cujo nome termina com a

const pessoas = [
    {nome: 'Carlos', idade: 51},
    {nome: 'Maria', idade: 60},
    {nome: 'José', idade: 70},
    {nome: 'Fábio', idade: 43},
    {nome: 'Lucas', idade: 7},
    {nome: 'Rafa', idade: 15},
    {nome: 'Judas', idade: 46},
    {nome: 'Carla', idade: 22}
];

const pessoasNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);
//console.log(pessoasNomeGrande);
const idosos = pessoas.filter(obj => obj.idade >= 50);
//console.log(idosos);
const pessoasA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));
//converte o nome pra lower case pra precisar verificar apenas uma vez
//a função endsWith verifica o último caractere da string
console.log(pessoasA);