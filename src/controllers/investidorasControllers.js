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
        if (err) res.status(500).send({ message: `Infelizmente não localizamos essa investidora com ${cnpj}` });
        res.status(200).send(investidoras);
    })
};

//POST INITIAL DATA OF THE INVESTIDORAS
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

//UPDATE TIPO DE NEGÓCIO
exports.updateBusiness = (req, res) => {

    Investidoras.updateOne(
        { cnpj: req.params.cnpj },
        { tipoNegocio: req.body.tipoNegocio },
        function (err) {
            if (err) return res.status(500).send({ message: err });
            res.status(200).send({ message: "Tipo de Negócio atualizado com sucesso!" });
        })
};

//DELETE INVESTIDORA 
exports.deleteInvestor = (req, res) => {
    const nome = req.params.nome;

    Investidoras.findOne({ nome }, function (err, investidora) {
        if (err) res.status(500).send(err);

        if (!investidora) return res.status(200).send({ message: "Infelizmente não localizamos essa investidora" });

        investidora.remove(function (err) {
            if (!err) {
                res.status(200).send({ message: "Investidora removida com sucesso..." });
            }
        })
    })
};