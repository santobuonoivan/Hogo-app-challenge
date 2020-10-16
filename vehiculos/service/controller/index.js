
const Vehiculo = require('../models/Vehiculo');

exports.getAll = async ( req, res, next ) => {
    try {
        const vehiculos = await Vehiculo.find();
        res.status(200).send(vehiculos);        
    } catch (error) {
        next(error);
    }
}

exports.getTypeByChapa = async ( req, res, next ) => {
    const {chapa} = req.params;
    try {
        const type = await Vehiculo.findOne({chapa}).populated('type');
        res.status(200).send({type});
    } catch (error) {
        next(error);
    }
}

exports.create = async ( req, res, next ) => {
    const {type, color, placa, marca} = req.body;
    try {
        const newVehiculo = new Vehiculo({type, color, placa, marca});
        const save = await newVehiculo.save();
        res.status(201).send(save);    
    } catch (error) {
        next(error);
    }
}