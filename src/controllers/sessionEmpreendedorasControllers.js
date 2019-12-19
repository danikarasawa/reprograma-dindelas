const jwt = require("jsonwebtoken");
const authConfig = require("../config/auth");
const Empreendedoras = require("../model/empreendedoras");
const bcrypt = require("bcryptjs");

function checkPassword(passwordEntry, password) {
  return bcrypt.compare(passwordEntry, password);
}

exports.accessToken = (req, res) => {
  const { login, password: passwordEntry } = req.body;

  const user = Empreendedoras.findOne({ cpf: login });

  if (!user) {
    return res.status(401).send({ error: "Empreendedora não encontrada" });
  }

  const { id, cpf, hashPass } = user;

  try {
    checkPassword(passwordEntry, hashPass);
  } catch {
    return res.status(401).send({ error: "Senha incorreta" });
  }

  try {
    return res.send({
      user: {
        id,
        cpf
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn
      })
    });
  } catch {
    return res.status(401).send({ error: "Errado" });
  }
};
