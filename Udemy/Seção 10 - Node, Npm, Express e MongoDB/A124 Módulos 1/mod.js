const nome = 'Luiz';
const sobrenome = 'Miranada';

const falaNome = () => {
    console.log(nome, sobrenome);
};

//module.exports.nome = nome;
exports.nome1 = nome;

console.log(module.exports);