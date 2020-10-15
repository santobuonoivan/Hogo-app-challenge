
const Tarifa = require('./../models/Tarifa');

exports.getTarifaByType = async ( req, res ) => {
    const {type} = req.params;
    try {
        const tarifa = await Tarifa.find({type});
        res.send(tarifa);    
    } catch (error) {
        res.status(erro.status).send({message: error.message});
    }
}

exports.create = async ( req, res ) => {
    const {type, importe} = req.body;
    try {
        const newTarifa = new Tarifa({type,importe});
        const save = await newTarifa.save();
        res.status(201).send(save);    
    } catch (error) {
        res.status(erro.status).send({message: error.message});
    }
}