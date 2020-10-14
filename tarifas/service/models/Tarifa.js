const {Schema, model} = require('mongoose');
//const { db } = require('./../db');

const TarifaSchema = new Schema({
    type: {
        type: String,
        required: true
    },
    importe: {
        type: Number,
        required: true
    },    
},{
    timestamps: true
});



module.exports = model('Tarifa', TarifaSchema, 'tarifas');