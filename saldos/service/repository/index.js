const fetch = require('node-fetch');
const config = require('config');
const TARIFA_SERVICE_URL = config.get("TARIFA_SERVICE_URL");
const VEHICULO_SERVICE_URL = config.get("VEHICULO_SERVICE_URL");
const ESTANCIA_SERVICE_URL = config.get("ESTANCIA_SERVICE_URL");


exports.getTarifaByType = async (type) => {
    const url = `${TARIFA_SERVICE_URL}/tarifas/${type}`;
    const result = await fetch(url, {
        method: 'GET',
    });
    const {tarifa} = await result.json();
    return tarifa;
}

exports.getTypeByPlaca = async (placa) => {
    const url = `${VEHICULO_SERVICE_URL}/vehiculos/${placa}`;
    const result = await fetch(url,{
        method: 'GET',    
    });
    const { type } = await result.json();
    return type;
}

exports.deleteOficialEstancia = async ( placas ) => {
    const result = await fetch(ESTANCIA_SERVICE_URL,{
        method: 'DELETE',
        body: JSON.stringify(placas),
        headers: { 'Content-Type': 'application/json' }
    });
    return await result.json(); 

}