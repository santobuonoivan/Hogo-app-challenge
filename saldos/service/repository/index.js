const axios = require('axios');
const TARIFA_SERVICE_URL = 'localhost:3000';
const VEHICULO_SERVICE_URL = 'localhost:3001';


exports.getTarifaByType = async (type) => {
    return await axios.get(`${TARIFA_SERVICE_URL}/tarifas/${type}`);
}

exports.getTypeByChapa = async (chapa) => {
    return await axios.get(`${VEHICULO_SERVICE_URL}/vehiculos/${chapa}`);
}