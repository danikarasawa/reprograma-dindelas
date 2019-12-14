const express = require("express");
const mongoose = require("mongoose");
// const bodyParser = require("body-parser"); // 
const path = require("path");
const app = express();

mongoose.connect("mongodb+srv://adm_dindin_master:em2tcz8qKjbQ8Ta@cluster0-dnqcd.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });

//ROTAS 
const index = require("./routes/index")
const empreendedoras = require("./routes/empreendedorasRoute")
const investidoras = require("./routes/investidorasRoute")
// const sessionEmpreendedoras = require("./routes/sessionEmpreendedorasRoute")
// const sessionInvestidoras = require("./routes/sessionInvestidorasRoute")

app.use(express.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
});

//app.use("/", index);
app.use(express.static('index.html'));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/../public/index.html'));
});

//ROTA APIDOC
app.use(express.static('doc'));
app.get('/api-doc', (req, res) => {
    res.sendFile(path.join(__dirname + '/../doc/index.html'));
});

app.use("/e", empreendedoras);
app.use("/i", investidoras);
// app.use("/sessionEmpreendedoras", sessionEmpreendedoras);
// app.use("/sessionInvestidoras", sessionInvestidoras);

module.exports = app;