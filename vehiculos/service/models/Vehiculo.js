const {Schema, model} = require('mongoose');

const VehiculoSchema = new Schema({
    placa: {
        type: String,
        required: true
    },
    marca: {
        type: String,
        required: true
    }, 
    color: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },    
},{
    timestamps: true
});



module.exports = model('Vehiculo', VehiculoSchema, 'vehiculos');