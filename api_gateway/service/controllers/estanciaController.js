
const fetch = require('node-fetch');
const ESTANCIA_SERVICE_URL = require('config').get('ESTANCIA_SERVICE_URL')+'/estancias';

exports.getAll = async ( req, res, next ) => {
    try {
        const response = await fetch(ESTANCIA_SERVICE_URL, { headers: {'Content-Type': 'application/json'},method: 'GET' });
        const estancias = await response.json();
        res.status(response.status).send(estancias);
    } catch (error) {
        next(error);  
    }
    
}

exports.deleteOficialEstancia = async ( req, res, next ) => {
    const {body} = req
    try {
        const response = await fetch(ESTANCIA_SERVICE_URL+'/deleteOficialEstancia', {
            headers: {'Content-Type': 'application/json'},
            method: 'DELETE',
            body: JSON.stringify(body)
        });
        const estancias = await response.json();
        res.status(response.status).send(estancias);
    } catch (error) {
        next(error);
    }
}

exports.entry = async ( req, res, next ) => {
    const {body} = req;
    try {
        const response = await fetch(ESTANCIA_SERVICE_URL+'/entry', {
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

exports.exit = async ( req, res, next ) => {
    const {body} = req;
    try {
        const response = await fetch(ESTANCIA_SERVICE_URL+'/exit', {
            headers: {'Content-Type': 'application/json'},
            method: 'PUT',
            body: JSON.stringify(body)
        });
        const save = await response.json();
        res.status(response.status).send(save); 
    } catch (error) {
        next(error);  
    }
}