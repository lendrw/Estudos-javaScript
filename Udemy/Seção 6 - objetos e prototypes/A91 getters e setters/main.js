function Produto (nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    
    
    Object.defineProperty(this, 'estoque', {
        enumerable: true, //decide se a chave será visível
        configurable: true, //decide se as propriedades poderão ser redefinidas
        get: function() {
            return estoque;
        },
        set: function(valor) {
            if (typeof valor !== 'number'){
                throw new TypeError('não é um número');
            } 
            estoque = valor;
        }
    });
}

// em factory functions, os getters e setters podem ser passados direto

function criaProduto(nome) {
    return {
        get nome() {
            return nome;
        },
        set nome(valor) {
            valor = valor.replace('azul', '');
            nome = valor;
        }
    }
}

/*
const p1 = new Produto('mouse', 50, 3);
p1.estoque = '20';
console.log(p1.estoque);
*/

const produto = criaProduto('Camiseta azul');
produto.nome = 'olho azul';
console.log(produto.nome)