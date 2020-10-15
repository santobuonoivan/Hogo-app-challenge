const {Schema, model} = require('mongoose');
//const { db } = require('./../db');

const SaldoSchema = new Schema({
    tiempo: {
        type: Number,
        required: true
    },
    placa: {
        type: String,
        required: true
    },
    tarifa: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    },    
},{
    timestamps: true
});



module.exports = model('Saldo', SaldoSchema, 'saldos');