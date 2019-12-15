const mongoose = require('mongoose');

const EmpreendedorasSchema = new mongoose.Schema({
    cpf: { type: Number, required: true },
    nome: { type: String },
    telefone: { type: String },
    idade: { type: Number },
    genero: { type: String, enum: ['Feminino', 'Masculino', 'Transgênero'] },
    estadoCivil: { type: String, enum: ['Solteira', 'União Estável', 'Casada', 'Divorciada'] },
    escolaridade: { type: String, enum: ['Ensino Fundamental', 'Ensino Médio', 'Ensino Superior', 'Pós-Graduação'] },
    tipoNegocio: { type: String, enum: ['Alimentação', 'Beleza', 'Tecnologia', 'Vestuário'] },
    tempoNegocio: { type: Number },
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