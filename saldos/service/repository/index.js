const axios = require('axios');
const config = require('config');
const TARIFA_SERVICE_URL = config.get("TARIFA_SERVICE_URL");
const VEHICULO_SERVICE_URL = config.get("VEHICULO_SERVICE_URL");


exports.getTarifaByType = async (type) => {
    return await axios.get(`${TARIFA_SERVICE_URL}/tarifas/${type}`);
}

exports.getTypeByChapa = async (chapa) => {
    return await axios.get(`${VEHICULO_SERVICE_URL}/vehiculos/${chapa}`);
}