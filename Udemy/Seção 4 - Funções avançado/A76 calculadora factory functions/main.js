function criaCalculadora() {
    return {

        inicia() {
            //função responsável por iniciar a calculadora
            this.cliqueBotoes();
            this.pressionaEnter();
        },

        pressionaEnter() {
            //realiza as operações ao pressionar enter
            this.display.addEventListener('keyup', e => {
                if (e.keyCode === 13) {
                    this.realizaConta();
                }
            });
        },

        display: document.querySelector('.display'),
        //selecionando o input

        btnClear: document.querySelector('.btn-clear'),
        //selecionando o botão de clear

        clearDisplay() {
            //função responsável por limpar o input
            this.display.value = '';
        },

        apagaUm() {
            //função responsável pela tecla de deletar
            this.display.value = this.display.value.slice(0, -1);
        },

        realizaConta() {
            let conta = this.display.value;

            try {
                conta = eval(conta);
                //o método eval executa um script

                if(!conta) {
                    alert('conta inválida');
                    return;
                }

                this.display.value = conta;
            } catch(e) {
                alert('conta inválida');
                return;
            }
        },

        cliqueBotoes() {
            //this -> calculadora
            document.addEventListener('click', e =>  {
                //a arrow function mantém o this travado no elemento
                const el = e.target;

                if(el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }

                if(el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if(el.classList.contains('btn-del')) {
                    this.apagaUm();
                }

                if(el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }
            });
        },

        btnParaDisplay(valor) {
            //fazendo os valores aparecerem no input
            this.display.value += valor;
        }
    };
}

const calculadora = criaCalculadora();
//chamando a função em uma constante
calculadora.inicia();
//executando o método