//o map usa o array original por referência para criar um novo array
//o array original é modificado

//dobre os números
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const numerosDobro = numeros.map(valor => valor * 2);
console.log(numerosDobro);





//Para cada elemento:
//Retorne apenas uma string com o nome da pessoa
//Remova apenas a chave "nome" do objeto
//Adicione uma chave id em cada objeto
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

const nomes = pessoas.map(obj => obj.nome);
console.log(nomes);

const semNome = pessoas.map(obj => ({idade: obj.idade}));
console.log(semNome);

const semNome2 = pessoas.map(obj => {
    const newObj = {... obj};
    //criando um novo array para evitar que o original seja modificado
    delete newObj.nome;
    return newObj;
});
console.log(semNome2);

const Ids = pessoas.map((obj, indice) => {
    obj.id = indice;
    return obj;
});
console.log(Ids);