class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() {
        console.log(`${this.nome} está falando.`);
    }
}

const p1 = new Pessoa('leandro', 'freire');
console.log(p1);
const p2 = new Pessoa('joana', 'freire');
console.log(p2);
const p3 = new Pessoa('guilherme', 'freire');
console.log(p3);
const p4 = new Pessoa('bob', 'freire');
console.log(p4);

//há apenas um instância em momória do método falar