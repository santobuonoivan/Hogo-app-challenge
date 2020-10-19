const express = require('express');
const cors = require('cors');
const port = process.env.NODE_PORT || process.env.PORT || 3000;

const app = express();
const routes = require('./router');
require('./db');

app.use(express.json());
app.use(cors());

//Test Conection
app.get('/', function(req, res) { res.send('Hello Hugo Apirest') });
app.use('/tarifas', routes);

app.listen(port, () => {
    console.log(`Listening tarifa services on ${port}`);
})