const Empreendedoras = require("../model/empreendedoras");
const bcrypt = require("bcryptjs");
const bcryptSalt = 8;

//GET ALL EMPREENDEDORAS
exports.get = (req, res) => {
    Empreendedoras.find(function (err, empreendedoras) {
        if (err) res.status(500).send(err);
        res.status(200).send(empreendedoras);
    });
};

//GET BY CPF
exports.getByCPF = (req, res) => {
    const cpf = req.params.cpf
    Empreendedoras.findOne({ cpf }, function (err, empreendedora) {
        if (err) res.status(500).send({ message: `Infelizmente não localizamos essa empreendedora com ${cpf}` });
        res.status(200).send(empreendedora);
    })
};

//POST INITIAL DATA OF THE EMPREENDEDORAS
exports.post = function (req, res) {
    const empreendedoras = new Empreendedoras(req.body);

    empreendedoras.save(function (err) {
        if (err) res.status(500).send(err);
        else {
            res.status(201).send({
                status: true,
                message: "♥ Empreendedora incluída com sucesso ♥"
            });
        }
    });
};

//UPDATE TELEFONE
exports.updatePhone = (req, res) => {

    Empreendedoras.updateOne(
        { cpf: req.params.cpf },
        { telefone: req.body.telefone },
        function (err) {
            if (err) return res.status(500).send({ message: err });
            res.status(200).send({ message: "Telefone atualizado com sucesso!" });
        })
};

//DELETE EMPREENDEDORA
exports.deleteEntrepreneur = (req, res) => {
    const cpf = req.params.cpf;

    Empreendedoras.findOne({ cpf }, function (err, empreendedora) {
        if (!empreendedora) return res.status(200).send({ message: "Infelizmente não localizamos essa investidora" });

        empreendedora.remove(function (err) {
            if (!err) {
                res.status(200).send({ message: "Empreendedora removida com sucesso..." })
            }
        })
    })
};

exports.postHashPass = async (req, res) => {
    const { cpf, password } = req.body;
    const salt = bcrypt.genSaltSync(bcryptSalt);

    const hashPass = await bcrypt.hashSync(password, salt);
    Empreendedoras.push({ cpf, hashPass })
        if (err) res.status(500).send(err);
        else {
            res.status(201).send({
                status: true,
                message: "Empreendedora cadastrada com sucesso, bebê"
            });
            return res.status(201).send(empreendedoras);
        }
        return res.status(401).json({ error: 'Errado' })
    };