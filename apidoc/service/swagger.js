const swaggerJSDoc = require('swagger-jsdoc');
const port = process.env.PORT || process.env.NODE_PORT || 8080;
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            version: "1.0.0",
            title: "Hugo - app - Estacionamiento Doc",
            description: "Challenge Hugo app",
            contact: {
                name: "Ivan Santobuono"
            },
            servers: [`http://localhost:${port}`]
        }
    },
    apis: ["./service/docs/**/*.js"]
};
module.exports = swaggerJSDoc(swaggerOptions);