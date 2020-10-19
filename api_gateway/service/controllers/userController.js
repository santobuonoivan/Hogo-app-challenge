
const fetch = require('node-fetch');
const USER_SERVICE_URL = require('config').get('USER_SERVICE_URL')+'/users';
const services = require('./../services');

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
        const user = await response.json();
        if (!user.isAuthenticate) throw new Error('Authentication Error');
        const token = await services.generateToken(user)
        res.status(response.status).send({token});
    } catch (error) {
        next(error);  
    }
}