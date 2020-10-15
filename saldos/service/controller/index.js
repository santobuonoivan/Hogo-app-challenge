const { getTarifaByType, getTypeByChapa } = require('./../repository');
const Saldo = require('./../models/Saldo');
const fs = require('fs');
const path = require('path');

exports.getImporte = async ( req, res ) => {
    const {placa} = req.params;
    try {
        const saldo = await Saldo.find({placa});
        const importe = Number(parseInt(saldo.tiempo) * saldo.tarifa).toFixed(2);
        res.status(200).send({importe,placa});        
    } catch (error) {
        res.status(erro.status).send({message: error.message});
    }
}

exports.create = async ( req, res ) => {
    const {placa, tiempo} = req.body;
    try {
        /** obtener type */
        const type = getTypeByChapa(placa);
        /** obtener tarifa */
        const tarifa = await getTarifaByType(type);

        const newSaldo = new Saldo({placa,tiempo,tarifa,type});
        const save = await newSaldo.save();        
        res.status(201).send(save);        
    } catch (error) {
        res.status(erro.status).send({message: error.message});
    }
}

exports.addTime = async ( req, res ) => {
    const { placa } = req.params;
    try {
        const updateSaldo = await Saldo.findOneAndUpdate({ placa },{$inc:{tiempo}},{new: true});
        res.status(200).send(updateSaldo);
    } catch (error) {
        res.status(erro.status).send({message: error.message});
    }
}

exports.residentialPayment = async ( req, res ) => {
    const { filename } = req.body;
    try {
        let saldos = Saldo.find({type: 'residencial'})
        .map( saldo =>{
            saldo.importe = Number(parseInt(saldo.tiempo) * saldo.tarifa).toFixed(2);
        });
        const uri = path.join(__dirname,'./../paymentsFiles',filename,'.txt');
        const titles = 'Núm. placa           Tiempo estacionado (min.)            Cantidad a pagar\n';

        fs.appendFile(uri,titles,{ encoding: 'utf8' }, (err) =>{ if( err ) throw err });
        for (let i = 0; i < saldos.length; i++) {
            const {placa, tiempo, importe} = saldos[i];
            const text= `${placa}                         ${tiempo}                     ${importe}\n`;
            fs.appendFile(uri,text,{ encoding: 'utf8' }, (err) =>{ if( err ) throw err });
        }

        var stat = fs.statSync(uri);
        res.writeHead(200, {
            'Content-Type': 'application/text',
            'Content-Length': stat.size,
            'Content-Disposition': 'attachment; filename=' + fileName + '.txt'
        });

        let readStream = fs.createReadStream(filePath);
        readStream.pipe(res);

    } catch (error) {
        res.status(erro.status).send({message: error.message});
    }
}