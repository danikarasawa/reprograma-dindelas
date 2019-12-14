const Empreendedoras = require("../model/empreendedoras");
// const bcrypt = require("bcryptjs");
// const bcryptSalt = 8;

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
    Empreendedoras.find({ cpf }, function (err, empreendedora) {
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
        if (err) res.status(500).send(err);

        if (!empreendedora) return res.status(200).send({ message: "Infelizmente não localizamos essa investidora" });

        empreendedora.remove(function (err) {
            if (!err) {
                res.status(200).send({ message: "Empreendedora removida com sucesso..." })
            }
        })
    })
};



// exports.post = (req, res) => {
//     const { cpf, password, nome, telefone, idade, genero, estadoCivil, escolaridade, tipoNegocio, tempoNegocio } = req.body;
//     const salt = bcrypt.genSaltSync(bcryptSalt);

//     try {
//         const hashPass = await bcrypt.hashSync(password, salt);
//         empreendedoras.push({ cpf, hashPass, nome, telefone, idade, genero, estadoCivil, escolaridade, tipoNegocio, tempoNegocio });

//         empreendedoras.save(function (err) {
//             if (err) res.status(500).send(err);
//             else {
//                 res.status(201).send({
//                     status: true,
//                     message: "Empreendedora cadastrada com sucesso, bebê"
//                 });
//                 return res.status(201).send(empreendedoras);
//             } catch (e) {
//                 return res.status(401).json({ error: 'erro' });
//             }
//         })
//     }
// }

// ROTA DA NATI PARA ATUALIZAR ITENS ESPECIFICOS 

// exports.updateOcorrencia = (req, res) => {
//     const cep = req.params.cep;
//     const id = req.params.id;

//     const encontratCep = CEPs.findOne({ cep: cep }, function (err, cep) {

//         if (err) {
//             res.status(404).send({ message: "CEP não localizado" })
//             return
//         } else {

//          let updateObj = { $set: {}};
//             for(var param in req.body) {
//             updateObj.$set['ocorrencias.$.'+ param] = req.body[param];
//             }

//             CEPs.update(
//                 { 'ocorrencias.id': id },
//                  updateObj,
//                 { upsert: true },
//                 function (err) {
//                     if (err) return res.status(500).send({ message: err });
//                     res.status(204).send({ message: "Ocorrência atualizada com sucesso!" })
//                 }
//             )
//         }
//     })