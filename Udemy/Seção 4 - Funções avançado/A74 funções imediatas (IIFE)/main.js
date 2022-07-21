// IIFE -> imediatly invoked function expression

function qualquerCoisa(){
    console.log(123);
}

qualquerCoisa();
//função chamada imediatamente
//ela toca o escopo global e isso pode causar erros na execução do código

(function(){
    function qualquerCoisa(){
        console.log(123);
    }
    qualquerCoisa();
})();
//ao envolver o código em uma função anônima, ela deixa de tocar o escopo global

(function(idade, peso, altura){

    const sobrenome = 'Miranda';
    function criaNome(nome){
        return nome + ' ' + sobrenome;
    }

    function falaNome(){
        console.log(criaNome('Luiz'))
    }

    falaNome();

    console.log(idade, peso, altura)
})(21, 70, 1.70);