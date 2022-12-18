// promise.all promise.race promise.reject promise.

function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject('BAD VALUE');

        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}

/* const promises = [
    esperaAi('Promise 1', 3000),
    esperaAi('Promise 2', 300),
    esperaAi('Promise 3', 4000)
];

Promise.race(promises)
.then((valor) => {
    console.log(valor);
})
.catch((erro) => {
    console.log(erro);
}); */

function baixaPagina() {
    const emCache = true;

    if(emCache) {
        return Promise.resolve('Página em cache');
    } else {
        return esperaAi('Baixei a página', 3000)
    }
}

baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina);
    })
.catch((e) => {
    console.log('ERRO', e);
});