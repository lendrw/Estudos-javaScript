class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    aumentarVolume() {
        this.volume += 2;
    }

    //método de instância
    diminuirVolume() {
        this.volume -= 2;
    }

    static trocaPilha() {
        // método estático
        console.log('sou um método estático')
    }
}

const controle = new ControleRemoto('LG');
controle.aumentarVolume();
console.log(controle);
ControleRemoto.trocaPilha();