//declaração de função (function hoisting)
function falaOi(){
    console.log('oi');
}

falaOi();

//first-class objects = pode tratar a função como um dado
//function expression

const souUmDado = function(){
    console.log('sou um dado.');
};

souUmDado();

function executaFuncao(funcao){
    console.log('vou executar sua função abaixo:')
    funcao();
}

executaFuncao(souUmDado);

//arrow function 
const arrow = () => {
    console.log('sou uma arrow function')
}

arrow();

//dentro de um objeto 

const obj = {
    falar() {
        console.log('Estou falando...');
    }
};

obj.falar();