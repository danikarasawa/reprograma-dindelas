const jwt = require("jsonwebtoken");
const authConfig = require("../config/auth");
const Investidoras = require("../model/investidoras");
const bcrypt = require("bcryptjs");

function checkPassword(passwordEntry, password) {
    return bcrypt.compare(passwordEntry, password);
  }
  
  exports.accessToken = (req, res) => {
    const { login, password: passwordEntry } = req.body;
  
    const user = Investidoras.findOne({ cnpj: login })
  
    if (!user) {
      return res.status(401).send({ error: 'Investidora não encontrada' });
    }
  
    const { id, cnpj, hashPass } = user;
  
    try {
      checkPassword(passwordEntry, hashPass);
    } catch {
      return res.status(401).send({ error: 'Senha incorreta' });
    }
  
    try {
      return res.send({
        user: {
          id,
          cnpj,
        },
        token: jwt.sign({ id }, authConfig.secret, {
          expiresIn: authConfig.expiresIn,
        }),
      });
    } catch {
      return res.status(401).send({ error: 'Errado' });
    }
  };