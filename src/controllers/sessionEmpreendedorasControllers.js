// const jwt = require("jsonwebtoken");
// const authConfig = require("../config/auth");
// const empreendedoras = require("../model/empreendedoras");
// const bcrypt = require("bcryptjs");

// function checkPassword(passwordEntry, password) {
//     return bcrypt.compareSync(passwordEntry, password);
// };

// exports.accessToken = (req, res) => {
//     const { cpf, password: passwordEntry } = req.body;
//     const userEmpreendedora = empreendedoras.find(e => e.cpf == cpf)

//     if (!userEmpreendedora) {
//         return res.status(401).json({error: 'User not found'});
//     }

//     const {id, cpf, hashPass} = userEmpreendedora;

//     try{
//         checkPassword(passwordEntry, hashPass);
//     } catch (e) {
//         return res.status(401).json({ error: 'password does not match'});
//     }

//     try{
//         return res.json({
//             user: {
//                 id,
//                 cpf,
//             },
//             token: jwt.sign({ id }, authConfig.secret, {
//                 expiresIn: authConfig.expiresIn,
//             }),
//         });
//     } catch (e) {
//         return res.status(401).json({error: 'erro'});
//     }
// };