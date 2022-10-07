function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100));
};

Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
};

const p1 = new Produto('mouse', 70);

//obj literal
const p2 = {
    nome: 'caneca',
    preco: 10
}

//reaproveitando o prototype
Object.setPrototypeOf(p2, Produto.prototype);
p2.aumento(10);

p1.desconto(50);
console.log(p1);
console.log(p2);