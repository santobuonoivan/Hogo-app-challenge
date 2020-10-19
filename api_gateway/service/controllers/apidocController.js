const fetch = require('node-fetch');
const API_DOC_SERVICE_URL = require('config').get('API_DOC_SERVICE_URL')+'/api-docs';

exports.apidoc = async ( req, res, next ) => {
    try {
        const response = await fetch(API_DOC_SERVICE_URL, { method: 'GET' });
        //const api = await response.json();
        res.status(response.status).send(response);    
    } catch (error) {
        next(error);  
    }
}