
const Estancia = require('../models/Estancia');
const moment =require('moment');

exports.getAll = async ( req, res ) => {
    try {
        const estancias = await Estancia.find();
        res.send(estancias);
    } catch (error) {
        res.status(erro.status).send({message: error.message});  
    }
    
}

exports.entry = async ( req, res ) => {
    const {placa} = req.body;
    const entrada = moment().format('YYYY-MM-DD HH:mm:ss');
    try {
        const newEstancia = new Estancia({ placa, entrada});
        const save = await newEstancia.save();
        res.status(201).send(save);    
    } catch (error) {
        res.status(erro.status).send({message: error.message});  
    }
}

exports.exit = async ( req, res ) => {
    const {placa} = req.body;
    const salida = moment().format('YYYY-MM-DD HH:mm:ss');
    try {
        const updateEstancia = await Estancia.findOneAndUpdate({ placa , salida: undefined},{$set:{salida}},{new: true});
        res.status(200).send(updateEstancia);
    } catch (error) {
        res.status(erro.status).send({message: error.message});  
    }
}