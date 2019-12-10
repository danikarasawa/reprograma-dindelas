const mongoose = require('mongoose');

const InvestidorasSchema = new mongoose.Schema({
    cnpj: { type: Number },
    nome: { type: String },
    telefone: { type: Number },
    ticket: { type: Number },
    tipoNegocio: [{
        alimentacao: { type: Boolean },
        beleza: { type: Boolean },
        tecnologia: { type: Boolean },
        vestuario: { type: Boolean }
    }],
    taxaJuros: { type: Number },
    parcelasMaximas: { type: Number },
    investimentoTotal: { type: Number },
    creditoQuantidade: { type: Number }, creditoValor: { type: Number },
    investimentoResidual: { type: Number },
    investimentoLucro: { type: Number }
}, {
    versionKey: false
});

const investidorasDB = mongoose.model('Investidoras', InvestidorasSchema);

module.exports = investidorasDB;