
const fetch = require('node-fetch');
const SALDOS_SERVICE_URL = require('config').get('SALDOS_SERVICE_URL')+'/saldos';

exports.getAll = async ( req, res, next ) => {
    try {
        const response = await fetch(SALDOS_SERVICE_URL, { headers: {'Content-Type': 'application/json'},method: 'GET' });
        const saldos = await response.json();
        res.status(response.status).send(saldos);
    } catch (error) {
        next(error);  
    }
}

exports.deleteAll = async ( req, res, next ) => {
    try {
        const response = await fetch(SALDOS_SERVICE_URL, { headers: {'Content-Type': 'application/json'},method: 'DELETE' });
        const saldos = await response.json();
        res.status(response.status).send(saldos);        
    } catch (error) {
        next(error);  
    }
}

exports.addTime = async ( req, res, next ) => {
    const { placa } = req.params;
    let { body } = req;
    try {
        const response = await fetch(SALDOS_SERVICE_URL+'/'+placa, {
            headers: {'Content-Type': 'application/json'},
            method: 'PUT',
            body: JSON.stringify(body)
        });
        const saldos = await response.json();
        res.status(response.status).send(saldos);
    } catch (error) {
        next(error);  
    }
}

exports.monthBegins = async ( req, res, next ) => {
    try {
        const response = await fetch(SALDOS_SERVICE_URL+'/monthBegins', {
            headers: {'Content-Type': 'application/json'},
            method: 'POST',
        });
        const saldos = await response.json();
        res.status(response.status).send(saldos);
    } catch (error) {
        next(error)
    }
}

exports.residentialPayment = async ( req, res, next ) => {
    const { filename } = req.params;
    try {
        const response = await fetch(SALDOS_SERVICE_URL+'/payment'+filename, {
            headers: {'Content-Type': 'application/json'},
            method: 'GET',
        });
        const saldos = await response.json();
        res.status(response.status).send(saldos);
    } catch (error) {
        next(error);  
    }
}