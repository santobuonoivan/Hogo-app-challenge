const axios = require('axios');
const SALDOS_SERVICES_URL = 'localhost:3004';

exports.addSaldo = async(placa, tiempo) => {
    const body = { tiempo };
    return await axios.put(`${SALDOS_SERVICES_URL}/saldos/${placa}`,body);
}
