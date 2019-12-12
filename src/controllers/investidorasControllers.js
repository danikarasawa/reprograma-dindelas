const Investidoras = require("../model/investidoras");
// const bcrypt = require("bcryptjs");
// const bcryptSalt = 8;

//GET ALL INVESTIDORAS
exports.get = (req, res) => {
    Investidoras.find(function (err, investidoras) {
        if (err) res.status(500).send(err);
        res.status(200).send(investidoras);
    });
};

//GET BY CNPJ
exports.getByCNPJ = (req, res) => {
    const cnpj = req.params.cnpj
    Investidoras.find({ cnpj }, function (err, investidoras) {
        if (err) res.status(500).send({ message: `Infelizmente não localizamos essa investidora: ${cnpj}` });
        res.status(200).send(investidoras);
    })
};

// POST INITIAL DATA OF THE INVESTIDORAS
exports.post = function (req, res) {
    const investidoras = new Investidoras(req.body);

    investidoras.save(function (err) {
        if (err) res.status(500).send(err);
        else {
            res.status(201).send({
                status: true,
                message: "♫ Investidora incluída com sucesso ♫"
            });
        }
    });
};

//UPDATE TIPO DE NEGOCIO
exports.updateCNPJ = (req, res) => {
    const cnpj = req.params.cnpj
    
    Investidoras.update(
        { cpf: req.params.cpf },
        //{ $set: req.body },
        {tipoNegocio: req.body},
        //{ upsert: true },
        function (err) {
            if (err) return res.status(500).send({ message: err });
            res.status(200).send({ message: "Atualizado com sucesso!" });
        })
};