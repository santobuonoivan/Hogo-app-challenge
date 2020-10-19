const express = require('express');
const cors = require('cors');
const { errorHandler } = require('./middleware');
const port = process.env.NODE_PORT || process.env.PORT || 3005;

const app = express();
const routes = require('./router');
require('./db');

app.use(express.json());
app.use(cors());
app.use(errorHandler);

//Test Conection
app.get('/', function(req, res) { res.send('Hello users services Apirest services') });
app.use('/users', routes);

app.listen(port, () => {
    console.log(`Listening auth service on ${port}`);
})