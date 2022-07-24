// filter, map, reduce
// retorne os números maiores que 10

const numeros = [10, 30, 23, 1, 2, 3, 4, 5, 79, 65];

//a função vai iterar lendo cada valor do array
    return valor > 10;
}

// a função permite a "passagem" dos valores que retornam true
const numerosFiltrados = numeros.filter(callbackFilter);
console.log(numerosFiltrados);