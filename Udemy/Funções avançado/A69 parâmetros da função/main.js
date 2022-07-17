/*
function funcao(){
    console.log('oie');
    console.log(arguments);
    console.log(arguments[0]);
}

//para funções definidas com a palavra function, existe a variável agruments que sustenta todos os argumentos enviados
funcao('valor', 1, 2);

function soma(){
    let total = 0;
    for (let argumento of arguments){
        total += argumento;
    }
    console.log(total);
}

soma(1, 1, 1); 
*/

const conta = function(operador, acumulador, ...numeros){
    //rest operator, atribui o restante dos parâmetros à variável antes dele
    for (let numero of numeros){
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }
    console.log(acumulador)
};

conta('*', 0, 1, 2, 3, 4);