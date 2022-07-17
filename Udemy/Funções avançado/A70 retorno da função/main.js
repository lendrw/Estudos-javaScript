//return: retorna um valor e termina a função

//uma função dentro da outra
function falaFrase(comeco){
    function falaResto(resto){
        return comeco + ' ' + resto;
    }
    return falaResto;
}

const fala = falaFrase('Olá');
//a função é chamada dentro de uma constante, recebendo o parâmetro primário
const resto = fala('mundo');
//a constante é chamada recebendo um parâmetro, que será o parâmetro secundário da função
console.log(resto);

//exemplo prático
function criaMultiplicador(multiplicador) {
    return function(n){
        return n * multiplicador;
    };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));