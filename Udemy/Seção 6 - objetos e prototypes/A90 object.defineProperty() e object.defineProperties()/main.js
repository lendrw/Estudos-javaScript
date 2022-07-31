function Produto (nome, preco, estoque) {
    Object.defineProperties(this, {
        nome: {
            enumerable: true, //decide se a chave será visível
            value: nome, //valor
            writable: false, //decide será o valor se alterado
            configurable: false, //decide se as propriedades poderão ser redefinidas
        },
        preco: {
            enumerable: true, //decide se a chave será visível
            value: preco, //valor
            writable: false, //decide será o valor se alterado
            configurable: false, //decide se as propriedades poderão ser redefinidas
        }
    });
    
    Object.defineProperty(this, 'estoque', {
        enumerable: true, //decide se a chave será visível
        value: estoque, //valor
        writable: false, //decide será o valor se alterado
        configurable: false, //decide se as propriedades poderão ser redefinidas
    });
}

const p1 = new Produto('mouse', 50, 39);
p1.estoque = 20
console.log(p1);