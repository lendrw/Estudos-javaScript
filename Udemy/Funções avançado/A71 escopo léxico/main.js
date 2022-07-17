const nome = 'Luiz';

function falaNome() {
    console.log(nome);
    //a bolha da função pode acessar seus vizinhos
}

falaNome();

//a engine do javaScript irá procurar o elemento em todas as camadas até chegar no escopo global