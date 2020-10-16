const fetch = require('node-fetch');
const config = require('config');
const SALDOS_SERVICES_URL = config.get("SALDOS_SERVICES_URL");

const addSaldo = async (placa, tiempo) => {
    const body = { tiempo };
    const url=`${SALDOS_SERVICES_URL}/saldos/${placa}`;
    const add = await fetch(url, {
        method: 'PUT',
        body: JSON.stringify(body),
        headers: {'Content-Type': 'application/json'}
    });
    return await add.json();
}

module.exports = {addSaldo};
