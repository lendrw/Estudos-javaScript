const HomeModel = require('../models/HomeModel');

HomeModel.create({
    titulo: 'Um título de testes',
    descricao: 'Uma descricao de testes.'
})
    .then(dados => console.log(dados))
    .catch(e => console.error(e));

exports.paginaInicial = (req, res) => {
    req.session.usuario = {nome: 'Luiz', logado: true};
    //esse dados ficará salvo na base pelo determinado em cookie
    req.flash('error', 'kojijl');
    req.flash('info', 'blalalal');
    req.flash('success', 'yai');
    res.render('index');
};

exports.trataPost = (req, res) => {
    res.send(req.body);
};