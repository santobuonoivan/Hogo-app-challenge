const {Schema, model} = require('mongoose');

let EstanciaSchema = new Schema({
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