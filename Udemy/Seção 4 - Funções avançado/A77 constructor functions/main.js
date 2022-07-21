// a função construtora retorna um objeto, por convenção deve começar com letra maiúscula
// o new cria um objeto vazio e o this aponta pra esse objeto, e retorna implicitamente para a variável

function Pessoa(nome, sobrenome) {
    // privadas
    const ID = 7468;
    const metodoInterno = function (){

    };

    //atributos ou métodos públicos
    
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = () => {
        console.log(this.nome + ': Sou um método')
    }
}

const p1 = new Pessoa('Leandro', 'Freire');
p1.metodo();