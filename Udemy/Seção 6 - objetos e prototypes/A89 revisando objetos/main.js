//objetos literais

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
}

const chave = 'sobrenome';
console.log(pessoa['sobrenome']);
console.log(pessoa[chave]);

console.log('');
console.log('/////////');
console.log('');

const pessoa1 = new Object();
pessoa1.nome = 'Luiz';
pessoa1.sobrenome = 'Azevedo';
pessoa1.idade = 21;
pessoa1.fala = function() {
    return(`${this.nome} está falando`)
};
pessoa1.getDataNascimento = function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
};
console.log(pessoa1);
console.log(pessoa1.fala());
console.log(pessoa1.getDataNascimento());

console.log('');
console.log('/////////');
console.log('');

for (let chave in pessoa1){
    console.log(chave);
}

console.log('');
console.log('/////////');
console.log('');

//Constructor function, Factory function e Classes

function criaPessoa(nome, sobrenome){
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}

const p1 = criaPessoa('Leandro', 'Freire');
console.log(p1.nomeCompleto);

console.log('');
console.log('/////////');
console.log('');

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

// cria um objeto vazio e atrela a palavra this ao objeto
// a palavra new retorna o objeto de forma implícita

const newPessoa = new Pessoa('Leandro', 'Freire');
Object.freeze(newPessoa);
//impede alterações no objeto
console.log(newPessoa);
// mesmo sendo uma constante, é possível alterar uma chave do objeto
//mas nunca a constante em si
// ex p1 = 'a'