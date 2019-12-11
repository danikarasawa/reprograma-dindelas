const mongoose = require('mongoose');

const EmpreendedorasSchema = new mongoose.Schema({
    cpf: { type: Number, required: true },
    nome: { type: String, required: true },
    telefone: { type: Number, required: true },
    idade: { type: Number, required: true },
    genero: { type: String, enum: ['Feminino', 'Masculino', 'Transgênero'], required: true },
    estadoCivil: { type: String, enum: ['Solteira', 'União Estável', 'Casada', 'Divorciada'], required: true },
    escolaridade: { type: String, enum: ['Ensino Fundamental', 'Ensino Médio', 'Ensino Superior', 'Pós-Graduação'], required: true },
    tipoNegocio: { type: String, enum: ['Alimentação', 'Beleza', 'Tecnologia', 'Vestuário'], required: true },
    tempoNegocio: { type: Number, required: true },
    creditoSolicitado: { type: Number },
    formaPagamento: { type: String, enum: ['À vista', 'Parcelado'] },
    parcelamento: { type: Number },
    creditoInformacoes: { type: String },
    creditoRecebido: { type: Boolean },
    creditoUsoAcordado: { type: Boolean },
    relatoData: { type: Date },
    relato: { type: String },
    emojiData: { type: Date },
    emoji: { type: String, enum: ['Feliz', 'Preocupada', 'Triste'] },
}, {
    versionKey: false
});

const empreendedorasDB = mongoose.model('Empreendedoras', EmpreendedorasSchema);

module.exports = empreendedorasDB;