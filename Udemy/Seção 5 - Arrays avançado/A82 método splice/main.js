//               0        1       2        3         4
//               -5       -4     -3       -2        -1 
const nomes = ['luiz', 'lucas', 'ana', 'alberto', 'maria'];

//nomes.splice(índice, deletar, elem1, elem2, elem3);

const removidos = nomes.splice(-3, 3, 'duh', 'duh');
console.log(nomes, removidos);