const express = require('express');
const cors = require('cors');
const axios = require('axios');
const port = process.env.NODE_PORT || process.env.PORT || 3000;

const app = express();
const routes = require('./router');

app.use(express.json());
app.use(cors());
app.use('/tarifas', routes);

app.listen(port, () => {
    console.log(`Listening tarifa services on ${port}`);
})