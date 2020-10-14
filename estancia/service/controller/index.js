
const Estancia = require('../models/Estancia');
const moment =require('moment');

exports.getAll = async ( req, res ) => {
    const estancias = await Estancia.find();
    res.send(estancias);
}

exports.entry = async ( req, res ) => {
    const {placa} = req.body;
    const entrada = moment().format('YYYY-MM-DD HH:mm:ss');
    const newEstancia = new Estancia({ placa, entrada});
    const save = await newEstancia.save();
    res.status(201).send(save);
}

exports.exit = async ( req, res ) => {
    const {placa} = req.body;
    const salida = moment().format('YYYY-MM-DD HH:mm:ss');
    const updateEstancia = await Estancia.findOneAndUpdate({ placa , salida: undefined},{$set:{salida}},{new: true});
    res.status(200).send(updateEstancia);
}