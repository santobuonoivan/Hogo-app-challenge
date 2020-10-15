
const Vehiculo = require('../models/Vehiculo');

exports.getAll = async ( req, res ) => {
    try {
        const vehiculos = await Vehiculo.find();
        res.status(200).send(vehiculos);        
    } catch (error) {
        res.status(error.status).send({message: error.message});
    }
}

exports.getTypeByChapa = async ( req, res ) => {
    const {chapa} = req.params;
    try {
        const type = await Vehiculo.findOne({chapa}).populated('type');
        res.status(200).send({type});
    } catch (error) {
        res.status(error.status).send({message: error.message});
    }
}

exports.create = async ( req, res ) => {
    const {type, color, placa, marca} = req.body;
    try {
        const newVehiculo = new Vehiculo({type, color, placa, marca});
        const save = await newVehiculo.save();
        res.status(201).send(save);    
    } catch (error) {
        res.status(error.status).send({message: error.message});
    }
}