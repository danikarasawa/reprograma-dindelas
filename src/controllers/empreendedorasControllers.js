const empreendedoras = require("../model/empreendedoras");
const bcrypt = require("bcryptjs");
const bcryptSalt = 8;

exports.get = (req, res) => {
    res.status(200).send(empreendedoras)
};