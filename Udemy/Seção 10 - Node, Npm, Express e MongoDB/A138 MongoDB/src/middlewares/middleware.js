module.exports = (req, res, next) => {
    if(req.body.cliente) {
        req.body.cliente = req.body.cliente.replace('Miranda', 'NÃO USE MIRANDA');
        console.log();
        console.log(`Vi que você postou ${req.body.cliente}`);
        console.log();
    }
    next();
};