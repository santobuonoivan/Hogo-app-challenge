const fetch = require('node-fetch');
const config = require('config');
const SALDOS_SERVICES_URL = config.get("SALDOS_SERVICES_URL");

const addSaldo = async (placa, tiempo) => {
    const body = { tiempo };
    //console.log('body repo: '+ JSON.stringify(body))
    //console.log('tiempo repo: '+tiempo)
    const url=`${SALDOS_SERVICES_URL}/saldos/${placa}`;
    const add = await fetch(url, {
        headers: {'Content-Type': 'application/json'},
        method: 'PUT',
        body: JSON.stringify(body),
    });
    const result = await add.json();
    return result;
}

module.exports = {addSaldo};
