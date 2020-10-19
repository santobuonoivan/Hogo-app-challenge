
const fetch = require('node-fetch');
const USER_SERVICE_URL = require('config').get('USER_SERVICE_URL')+'/users';

exports.getAll = async ( req, res, next ) => {
    try {
        const response = await fetch(USER_SERVICE_URL, { headers: {'Content-Type': 'application/json'},method: 'GET' });
        const users = await response.json();
        res.status(response.status).send(users);
    } catch (error) {
        next(error);  
    }
    
}

exports.registry = async ( req, res, next ) => {
    const {body} = req;
    try {
        const response = await fetch(USER_SERVICE_URL, { 
            headers: {'Content-Type': 'application/json'},
            method: 'POST',
            body: JSON.stringify(body)
        });
        const user = await response.json();
        res.status(response.status).send(user); 
    } catch (error) {
        next(error);    
    }
}

exports.login = async ( req, res, next ) => {
    const {body} = req;
    try {
        const response = await fetch(USER_SERVICE_URL+'/auth', { 
            headers: {'Content-Type': 'application/json'},
            method: 'POST',
            body: JSON.stringify(body)
        });
        const token = await response.json();
        res.status(response.status).send(token);
    } catch (error) {
        next(error);  
    }
}