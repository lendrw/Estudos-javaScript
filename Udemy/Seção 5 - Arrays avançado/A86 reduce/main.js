// situações para usar cada função
// somar todos os números (reduce)
// retorne um array com os números pares (filter)
// retorne um array com o dobro dos valores (map)

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const total = numeros.reduce((acumulador, valor, indice, array) => {
        acumulador += valor;
        return acumulador;
}, 0); //valor inicial do acumulador
console.log(total);













//retorne a pessoa mais velha

const pessoas = [
    {nome: 'rosa', idade: 1},
    {nome: 'val', idade: 2},
    {nome: 'bet', idade: 3},
    {nome: 'lik', idade: 5},
    {nome: 'sheeer', idade: 6},
    {nome: 'boom', idade: 7},
    {nome: 'esc', idade: 8},
    {nome: 'asd', idade: 9},
];

const maisVelha = pessoas.reduce((acumulador, valor) => {
    if (acumulador.idade > valor.idade) return acumulador;
    return valor;
});
//sem mandar um valor inicial para o acumulador, ele se torna o primeiro elemento
//e o valor se torna o objeto seguinte
console.log(maisVelha);