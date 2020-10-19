
const fetch = require('node-fetch');
const VEHICULO_SERVICE_URL = require('config').get('VEHICULO_SERVICE_URL')+'/vehiculos';

exports.getAll = async ( req, res, next ) => {
    try {
        const response = await fetch(VEHICULO_SERVICE_URL, { headers: {'Content-Type': 'application/json'},method: 'GET' });
        const vehiculos = await response.json();
        res.status(response.status).send(vehiculos);
    } catch (error) {
        next(error);
    }
}

exports.getTypeByChapa = async ( req, res, next ) => {
    const {placa} = req.params;
    try {
        const response = await fetch(VEHICULO_SERVICE_URL+'/'+placa, { headers: {'Content-Type': 'application/json'},method: 'GET' });
        const type = await response.json();
        res.status(response.status).send(type);
    } catch (error) {
        next(error);
    }
}

exports.create = async ( req, res, next ) => {
    const {body} = req;
    try {
        const response = await fetch(VEHICULO_SERVICE_URL, { 
            headers: {'Content-Type': 'application/json'},
            method: 'POST',
            body: JSON.stringify(body)
        });
        const save = await response.json();
        res.status(response.status).send(save); 
           
    } catch (error) {
        next(error);
    }
}