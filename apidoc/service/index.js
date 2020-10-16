'use strict';

const express = require('express');
const cors = require('cors');
/* swagger */
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger.js');

const port = process.env.PORT || process.env.NODE_PORT || 8080;

const app = express();

app.use(cors());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec /*, { explorer: true }*/ ));

//Test Conection
app.get('/', function(req, res) { res.send('Hello Hugo challenge Docs services') });

//Server

try {
    app.listen(port, () => {
        console.log(`application up and running on port: ${port}`);
    });
} catch (e) {
    console.log(e.message);
}