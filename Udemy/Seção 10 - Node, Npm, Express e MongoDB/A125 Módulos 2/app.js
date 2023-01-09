const cachorro = require('./mod');
const cachorrinho = new cachorro('larry');
//cachorrinho.latir();

const path = require('path');
console.log(path.resolve(__dirname, '..', '..'))