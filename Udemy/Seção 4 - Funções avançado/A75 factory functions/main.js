function criaPessoa(nome, sobrenome, altura, peso){
    return {
        nome,
        sobrenome,

        //getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },

        //setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            //converte em um array com cada palavra separada por um espaço
            this.nome = valor.shift();
            //remove o primeiro elemento do array e o atribui à variável
            this.sobrenome = valor.join(' ');
            //atribui o restante do array
        },

        fala(assunto) {
            return `${this.nome} está ${assunto}.`;
            //o this se refere ao objeto que chama o método
        },

        altura,
        peso,
        //Getter
        //faz o método se comportar como um atributo simples
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Leandro', 'Freire', 1.70, 70);
const p2 = criaPessoa('Pedro', 'Freire', 1.80, 80);
console.log(p1.fala('estudando JS'));
console.log(p2.fala('estudando JS'));
console.log(p1.imc);
console.log(p2.imc);
console.log(p1.nomeCompleto);
p1.nomeCompleto = 'José Augusto da Silva';
console.log(p1.nome);
console.log(p1.sobrenome);