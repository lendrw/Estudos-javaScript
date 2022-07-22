function* geradora1() {
    //Código qualquer...
    yield 'Valor 1';

    //Código qualquer...
    yield 'Valor 2';

    //Código qualquer...
    yield 'Valor 3';
}

const g1 = geradora1();
console.log(g1);
console.log(g1.next());
console.log(g1.next().value);
console.log(g1.next());
console.log(g1.next());
console.log('/////////////////////////')

function* geradora2() {
    let i = 0;

    while(true) {
        //infinito
        yield i;
        i++;
    }
}

const g2 = geradora2();
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log('///////////////////////////');

function* geradora3() {
    yield 0;
    yield 1;
    yield 2;
    yield 3;
}

function* geradora4() {
    yield* geradora3();
    //é possível chamar uma função geradora dentro de outra
    yield 4;
    yield 5;
    yield 6;
}

const g4 = geradora4();

for (let valor of g4) {
    console.log(valor);
}
console.log('//////////////////////////////');

function* geradora5() {
    yield function() {
        console.log('Vim do y1');
    };

    // ...

    yield function() {
        console.log('Vim do y2');
    };
}

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;

func1();
func2();