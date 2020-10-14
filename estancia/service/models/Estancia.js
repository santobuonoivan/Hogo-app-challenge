const {Schema, model} = require('mongoose');

const EstanciaSchema = new Schema({
    placa: {
        type: String,
        required: true
    },
    entrada: {
        type: String,
        required: false
    }, 
    salida: {
        type: String,
        required: false
    },    
},{
    timestamps: true
});



module.exports = model('Estancia', EstanciaSchema, 'Estancias');