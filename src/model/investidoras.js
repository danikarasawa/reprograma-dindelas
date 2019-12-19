const mongoose = require("mongoose");

const InvestidorasSchema = new mongoose.Schema(
  {
    cnpj: { type: Number, required: true },
    hashPass: { type: String },
    nome: { type: String },
    telefone: { type: String },
    genero: { type: String, enum: ["Feminino", "Masculino", "Transgênero"] },
    ticket: { type: Number },
    tipoNegocio: [
      {
        type: String,
        enum: ["Alimentação", "Beleza", "Tecnologia", "Vestuário"]
      }
    ],
    taxaJuros: { type: Number },
    parcelasMaximas: { type: Number },
    investimentoTotal: { type: Number },
    creditoQuantidade: { type: Number },
    creditoValor: { type: Number },
    investimentoResidual: { type: Number },
    investimentoLucro: { type: Number }
  },
  {
    versionKey: false
  }
);

const investidorasDB = mongoose.model("Investidoras", InvestidorasSchema);

module.exports = investidorasDB;
