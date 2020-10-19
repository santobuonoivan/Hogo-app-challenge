
const User = require('../models/User');
const services = require('../services');

exports.getAll = async ( req, res, next ) => {
    try {
        const users = await User.find().select("-password");
        res.send(users);
    } catch (error) {
        next(error);  
    }
    
}

exports.registry = async ( req, res, next ) => {
    const {name, email, password} = req.body;
    try {
        const emailUser = await User.findOne({ email: email });
        if (emailUser) throw new Error('The Email is already in use.')

        const newUser = new User({ name, email, password});
        newUser.password = await newUser.encryptPassword(password);
        const save = await newUser.save();        
        res.status(201).send({message: "user created!!!"}); 
    } catch (error) {
        next(error);    
    }
}

exports.login = async ( req, res, next ) => {
    const {email, password} = req.body;
    try {
        let user = await User.findOne({ email });
        if(!user) throw new Error('User not found');

        const match = await user.matchPassword(password);
        if(!match) throw new Error('Bad credentials');

        const token = await services.generateToken(user);
        res.status(200).send({token});
    } catch (error) {
        next(error);  
    }
}