// Produto -> aumento, desconto
// Camisa = cor, caneca = material
function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(quantia) {
    this.preco += quantia;
};

Produto.prototype.desconto = function(quantia) {
    this.preco -= quantia;
};

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco);
    this.cor = cor;
}
Camiseta.prototype = Object.create(Produto.prototype);
//cria um objeto vazio e linka com o prototype de camiseta, mas o construtor passa a ser o de produto
Camiseta.prototype.constructor = Camiseta;
//redefine o construtor para camiseta

function Caneca(nome, preco, material) {
    Produto.call(this, nome, preco);
    this.material = material;
}
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const camiseta = new Camiseta('Regata', 7.5, 'preta');
const produto = new Produto('gen', 5);
camiseta.aumento(10);
console.log(camiseta);
console.log(produto);