const axios = require('axios');
const config = require('config');
const SALDOS_SERVICES_URL = config.get("SALDOS_SERVICES_URL");

const addSaldo = async (placa, tiempo) => {
    const body = { tiempo };
    console.log(`${SALDOS_SERVICES_URL}/saldos/${placa}`);
    const add = await axios.put(`${SALDOS_SERVICES_URL}/saldos/${placa}`,body);
    return add;
}

module.exports = {addSaldo};
