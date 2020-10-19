const config = require('config');
const jwt = require('jsonwebtoken');

module.exports = async ( req, res, next ) => {
    const token = req.header('Authorization');
    let key = config.get('jwtPrivateKey');
    if (!token) return res.status(403).send({message:'Acceso denegado. Error en token de seguridad'});
    try {
        const decoded = jwt.verify(token, key,{algorithm:'HS256'});
        let user_token = decoded.user;
        next();
    } catch (error) {
        next(error);  
    }
}
