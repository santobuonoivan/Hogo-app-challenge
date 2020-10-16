const axios = require('axios');
const config = require('config');
const TARIFA_SERVICE_URL = config.get("TARIFA_SERVICE_URL");
const VEHICULO_SERVICE_URL = config.get("VEHICULO_SERVICE_URL");
const ESTANCIA_SERVICE_URL = config.get("ESTANCIA_SERVICE_URL");


exports.getTarifaByType = async (type) => {
    const reuslt = await axios.get(`${TARIFA_SERVICE_URL}/tarifas/${type}`);
    console.log(reuslt)
    return reuslt.data.tarifa;
}

exports.getTypeByPlaca = async (placa) => {
    
    const reuslt = await axios.get(`${VEHICULO_SERVICE_URL}/vehiculos/${placa}`);
    console.log(reuslt)
    return reuslt.data.type;
}

exports.deleteOficialEstancia = async ( placas ) => {
    return await axios.delete(ESTANCIA_SERVICE_URL, placas)
}