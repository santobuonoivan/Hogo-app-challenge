
const Vehiculo = require('../models/Vehiculo');

exports.getAll = async ( req, res ) => {
    const vehiculos = await Vehiculo.find();
    res.send(vehiculos);
}

exports.create = async ( req, res ) => {
    const {type, color, placa, marca} = req.body;
    const newVehiculo = new Vehiculo({type, color, placa, marca});
    const save = await newVehiculo.save();
    res.status(201).send(save);
}