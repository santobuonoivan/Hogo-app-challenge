
const Tarifa = require('./../models/Tarifa');

exports.getAll = async ( req, res ) => {
    const tarifas = await Tarifa.find();
    res.send(tarifas);
}

exports.create = async ( req, res ) => {
    const {type, importe} = req.body;
    const newTarifa = new Tarifa({type,importe});
    const save = await newTarifa.save();
    res.status(201).send(save);
}