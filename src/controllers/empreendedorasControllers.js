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

// POST INITIAL DATA OF THE EMPREENDEDORAS
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