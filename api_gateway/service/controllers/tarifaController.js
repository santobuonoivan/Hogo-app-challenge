
const fetch = require('node-fetch');
const TARIFA_SERVICE_URL = require('config').get('TARIFA_SERVICE_URL')+'/tarifas';

exports.getTarifaByType = async ( req, res, next ) => {
    const {type} = req.params;
    try {
        const response = await fetch(TARIFA_SERVICE_URL+'/'+type, { 
            headers: {'Content-Type': 'application/json'},
            method: 'GET' 
        });
        const tarifa = await response.json();
        res.status(response.status).send(tarifa);    
    } catch (error) {
        next(error);  
    }
}

exports.create = async ( req, res, next ) => {
    const {body} = req;
    try {
        const response = await fetch(TARIFA_SERVICE_URL, { 
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