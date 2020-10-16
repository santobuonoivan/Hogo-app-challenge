const Joi = require('@hapi/joi');
const { joiMsgError } = require('./../validate/errorMessages');

exports.hasEntry = async(req, res, next) => {
    try {
        const schema = Joi.object({
            placa: Joi.string().required().regex(/^(\w+)*$/).min(6).max(9).trim().label('Placa')
        });

        let { error, value } = schema.validate(req.body);
        if (error)
            return res.status(400).json({ error: joiMsgError(error.details[0]) });
        req.body = value;
        return next();
    } catch (e) {
        return res.status(400).json({ error: e.message });
    }
};
