const nome = 'Luiz';
const sobrenome = 'Miranada';

const falaNome = () => nome + ' ' + sobrenome;

//module.exports.nome = nome;
//exports.nome1 = nome;

exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;
this.qualquerCoisa = 'O que eu quiser exportar.'