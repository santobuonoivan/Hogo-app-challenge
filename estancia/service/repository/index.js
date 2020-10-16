const axios = require('axios');
const config = require('config');
const SALDOS_SERVICES_URL = config.get("SALDOS_SERVICES_URL");

exports.addSaldo = async(placa, tiempo) => {
    const body = { tiempo };
    return await axios.put(`${SALDOS_SERVICES_URL}/saldos/${placa}`,body);
}
