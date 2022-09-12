const produto = {nome: 'produto', preco: 1.8};
const caneca = produto;
caneca.nome = 'caneca'

console.log(caneca);
console.log(produto);
// dessa forma, alterando um dos objetos, ambos serão alterados, pois se trata do mesmo endereço de memória

const copo = {...produto, material: 'plástico'};
copo.nome = 'copo';
console.log(copo);
//usando spread operator essa problema não ocorre

console.log(Object.getOwnPropertyDescriptor(produto, 'nome')); //retorna as propriedades