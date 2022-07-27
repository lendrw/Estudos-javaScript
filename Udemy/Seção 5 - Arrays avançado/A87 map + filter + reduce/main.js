// retorne a soma do dobro de todas os pares
// -> filtrar pares
// -> dobrar os valores
// -> reduzir (somar tudo)

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 2];
const numerosPares = numeros
    .filter(valor => valor % 2 === 0)
    .map(valor => valor * 2)
    .reduce((acumulador, valor) => acumulador + valor);

console.log(numerosPares);


/* const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 2];
const numerosPares = numeros.filter(valor => {return valor % 2 === 0});
const dobraValores = numerosPares.map(valor => valor * 2);
console.log(dobraValores);
const soma = dobraValores.reduce((acumulador, valor) => {
    return acumulador + valor;
});
console.log(soma); */
