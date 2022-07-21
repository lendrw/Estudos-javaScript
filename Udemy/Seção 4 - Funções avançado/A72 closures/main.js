function retornaFuncao(){
    const nome = 'Luiz';
    //a constante está no escopo léxico de retornaFuncao

    return function(){
        return nome;
        //a função tem acesso ao escopo da função mãe
    };
}

const funcao = retornaFuncao();
console.dir(funcao); //abra no navegador -> console
//a função anônima, nesse contexto, possui acesso a 3 escopos, o dela, o da mãe e o global
//o closure é a habilidade dessa função em acessar o seu escopo léxico

function retornaFuncao2(nome){
    return function(){
        return nome;
    };
}

const funcao2 = retornaFuncao2('Carlos');
//o closure pode ser alterado, nessa chamada, a função fecha escopo com o parâmetro 'Carlos
console.dir(funcao2());