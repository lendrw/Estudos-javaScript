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