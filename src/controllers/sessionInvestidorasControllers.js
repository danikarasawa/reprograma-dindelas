// const jwt = require("jsonwebtoken");
// const authConfig = require("../config/auth");
// const investidoras = require("../model/investidoras");
// const bcrypt = require("bcryptjs");

// function checkPassword(passwordEntry, password) {
//     return bcrypt.compareSync(passwordEntry, password);
// };

// exports.accessToken = (req, res) => {
//     const { cnpj, password: passwordEntry } = req.body;
//     const userInvestidora = investidoras.find(e => e.cpf == cpf)

//     if (!userInvestidora) {
//         return res.status(401).json({error: 'User not found'});
//     }

//     const {id, cnpj, hashPass} = userInvestidora;

//     try{
//         checkPassword(passwordEntry, hashPass);
//     } catch (e) {
//         return res.status(401).json({ error: 'password does not match'});
//     }

//     try{
//         return res.json({
//             user: {
//                 id,
//                 cnpj,
//             },
//             token: jwt.sign({ id }, authConfig.secret, {
//                 expiresIn: authConfig.expiresIn,
//             }),
//         });
//     } catch (e) {
//         return res.status(401).json({error: 'erro'});
//     }
// };