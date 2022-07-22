const nomes = ['Maria', 'João', 'Carlos'];
//String, objetos, funções
nomes[2] = 'd';
console.log(nomes);
delete nomes[0];
console.log(nomes);

const removido = nomes.pop();
console.log(nomes, removido);
nomes.shift();
console.log(nomes);
nomes.push('Luiz');
console.log(nomes);
nomes.unshift('Adicionei um valor no começo');
console.log(nomes);

console.log('//////////////////////////////////');

const novo = nomes.slice(1, -1);
console.log(novo);

const leandro = 'Leandro Freire Cabral';
const separar = leandro.split(' ');
console.log(separar);
const juntar = separar.join(' ');
console.log(juntar);