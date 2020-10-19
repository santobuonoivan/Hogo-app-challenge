const express = require('express');
const cors = require('cors');
const port = process.env.NODE_PORT || process.env.PORT || 3000;

const app = express();

const estanciaRouter = require('./router/estanciaRouter');
const saldosRouter = require('./router/saldosRouter');
const userRouter = require('./router/userRouter');
const apidocRouter = require('./routers/apidocRouter');
const tarifasRouter = require('./routers/tarifasRouter');
const vehiculoRouter = require('./routers/vehiculoRouter');


app.use(express.json());
app.use(cors());

//Test Conection
app.get('/', function(req, res) { res.send('Hello api-gateway services') });
app.use('/api-docs',  apidocRouter );
app.use('/estancias', estanciaRouter);
app.use('/saldos', saldosRouter);
app.use('/tarifas', tarifasRouter);
app.use('/users', userRouter);
app.use('/vehiculos', vehiculoRouter);

app.listen(port, () => {
    console.log(`Listening vehiculo on ${port}`);
})