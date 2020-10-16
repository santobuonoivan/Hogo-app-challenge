
const Estancia = require('../models/Estancia');
const { addSaldo } = require('./../repository');
const moment =require('moment');

exports.getAll = async ( req, res, next ) => {
    try {
        const estancias = await Estancia.find();
        res.send(estancias);
    } catch (error) {
        next(error);  
    }
    
}

exports.entry = async ( req, res, next ) => {
    const {placa} = req.body;
    const entrada = moment().format('YYYY-MM-DD HH:mm:ss');
    try {
        const newEstancia = new Estancia({ placa, entrada});
        const save = await newEstancia.save();
        addSaldo(placa, 0)
        res.status(201).send(save);    
    } catch (error) {
        next(error);    
    }
}

exports.exit = async ( req, res, next ) => {
    const {placa} = req.body;
    const salida = moment().format('YYYY-MM-DD HH:mm:ss');
    try {
        let updateEstancia = await Estancia.findOneAndUpdate({ placa , salida: undefined},{$set:{salida}},{new: true});
        const diff = moment(updateEstancia.salida).diff(moment(updateEstancia.entrada,'minutes'));
        /** si es no residencial devuelve importe a pagar */
        updateEstancia.ticket = undefined;
        const result = addSaldo(placa,dif);
        if (result.body.importe){
            updateEstancia.ticket = result.body
        }
        res.status(200).send(updateEstancia);
    } catch (error) {
        next(error);  
    }
}