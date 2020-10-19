const config = require('config');
const jwt = require('jsonwebtoken');
const tokenExpTime = process.env.TOKEN_LIVE_TIME || 3000;
const _ = require('lodash');


exports.generateToken = async function(user){    
    let tempUser = _.pick(user, ['email', 'name']);
    let key = config.get('jwtPrivateKey');
    const token = jwt.sign({user:tempUser}, key, {algorithm:'HS256',expiresIn: tokenExpTime});
    return token;
};
