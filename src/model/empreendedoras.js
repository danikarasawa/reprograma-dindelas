const mongoose = require('mongoose');

const EmpreendedorasSchema = new mongoose.Schema({
    cpf: { type: Number },
    nome: { type: String },
    telefone: { type: Number },
    idade: { type: Number },
    estadoCivil: [{
        solteira: { type: Boolean },
        casada: { type: Boolean },
        divorciada: { type: Boolean },
        uniaoEstavel: { type: Boolean }
    }],
    escolaridade: [{
        ensinoFundamental: { type: Boolean },
        ensinoMedio: { type: Boolean },
        ensinoSuperior: { type: Boolean },
        posGraduacao: { type: Boolean }
    }],
    tipoNegocio: [{
        alimentacao: { type: Boolean },
        beleza: { type: Boolean },
        tecnologia: { type: Boolean },
        vestuario: { type: Boolean }
    }],
    tempoNegocio: { type: Number },
    creditoSolicitado: { type: Number },
    formaPagamento: [{
        parcelaUnica: { type: Boolean },
        parcelado: { type: Boolean }
    }],
    parcelamento: { type: Number },
    creditoInformacoes: { type: String },
    creditoRecebido: { type: Boolean },
    creditoUsoAcordado: { type: Boolean },
    relato: { type: String },
    emoji: [{
        feliz: { type: Boolean },
        preocupada: { type: Boolean },
        triste: { type: Boolean }
    }]
}, {
    versionKey: false
});

const empreendedorasDB = mongoose.model('Empreendedoras', EmpreendedorasSchema);

module.exports = empreendedorasDB;