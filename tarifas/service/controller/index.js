
const Tarifa = require('./../models/Tarifa');

exports.getTarifaByType = async ( req, res, next ) => {
    const {type} = req.params;
    try {
        const tarifa = await Tarifa.findOne({type});
        res.send(tarifa);    
    } catch (error) {
        next(error);  
    }
}

exports.create = async ( req, res, next ) => {
    const {type, importe} = req.body;
    try {
        const newTarifa = new Tarifa({type,importe});
        const save = await newTarifa.save();
        res.status(201).send(save);    
    } catch (error) {
        next(error);  
    }
}