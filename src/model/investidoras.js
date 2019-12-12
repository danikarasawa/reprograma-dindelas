const mongoose = require('mongoose');

const InvestidorasSchema = new mongoose.Schema({
    cnpj: { type: Number, required: true },
    hashPass: {type: String},
    nome: { type: String, required: true },
    telefone: { type: String, required: true },
    genero: { type: String, enum: ['Feminino', 'Masculino', 'Transgênero'], required: true },
    ticket: { type: Number, required: true },
    tipoNegocio: { type: String, enum: ['Alimentação', 'Beleza', 'Tecnologia', 'Vestuário'], required: true },
    taxaJuros: { type: Number, required: true },
    parcelasMaximas: { type: Number, required: true },
    investimentoTotal: { type: Number, required: true },
    creditoQuantidade: { type: Number },
    creditoValor: { type: Number },
    investimentoResidual: { type: Number },
    investimentoLucro: { type: Number }
}, {
    versionKey: false
});

const investidorasDB = mongoose.model('Investidoras', InvestidorasSchema);

module.exports = investidorasDB;