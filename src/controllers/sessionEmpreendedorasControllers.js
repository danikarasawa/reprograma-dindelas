const jwt = require("jsonwebtoken");
const authConfig = require("../config/auth");
const Empreendedoras = require("../model/empreendedoras");
const bcrypt = require("bcryptjs");

function checkPassword(passwordEntry, password) {
    return bcrypt.compareSync(passwordEntry, password);
  }
  
  exports.accessToken = (req, res) => {
    const { cadastro, password: passwordEntry } = req.body;
    const user = Empreendedoras.find(e => e.cpf == cadastro)
  
    if (!user) {
      return res.status(401).json({ error: 'Empreendedora não encontrada' });
    }
  
    const { id, cpf, hashPass } = user;
  
    try {
      checkPassword(passwordEntry, hashPass);
    } catch (e) {
      return res.status(401).json({ error: 'Senha incorreta' });
    }
  
    try {
      return res.json({
        user: {
          id,
          cpf,
        },
        token: jwt.sign({ id }, authConfig.secret, {
          expiresIn: authConfig.expiresIn,
        }),
      });
    } catch (e) {
      return res.status(401).json({ error: 'Errado' });
    }
  };