import mongoose from 'mongoose';

const ViagensSchema = new mongoose.Schema({
    situacao: {
        type: String,
        required: true
    },
    nomePessoa: {
        type: String,
        required: true
    },
    cargo: {
        type: String,
        required: true
    },
    destino: {
        type: String,
        required: true
    },
    orgaoSolicitante: {
        type: String,
        required: true
    },
    orgaoSuperior: {
        type: String,
        required: true
    },
    valor: {
        type: mongoose.Schema.Types.Number,
        required: true
    }
});
export default mongoose.model('viagens', ViagensSchema);