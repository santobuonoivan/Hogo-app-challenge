const express = require('express');
const cors = require('cors');
const axios = require('axios');
const port = process.env.NODE_PORT || process.env.PORT || 3004;

const app = express();
const routes = require('./router');
require('./db');

app.use(express.json());
app.use(cors());

//Test Conection
app.get('/', function(req, res) { res.send('Hello saldos services Apirest') });
app.use('/saldos', routes);

app.listen(port, () => {
    console.log(`Listening saldos services on ${port}`);
})