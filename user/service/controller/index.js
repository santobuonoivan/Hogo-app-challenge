
const User = require('../models/User');

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
    let isAuthenticate = false;
    try {
        let findUser = await User.findOne({ email });
        if(!findUser) throw new Error('User not found');

        const match = await findUser.matchPassword(password);
        if(!match) throw new Error('Bad credentials');
        isAuthenticate = true;
        res.status(200).send({email, password, isAuthenticate});
    } catch (error) {
        next(error);  
    }
}

