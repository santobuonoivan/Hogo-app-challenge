const repository = require('./../repository');
const Saldo = require('./../models/Saldo');
const fs = require('fs');
const path = require('path');

exports.getImporte = async ( req, res, next ) => {
    const {placa} = req.params;
    try {
        const saldo = await Saldo.find({placa});
        const importe = Number(parseInt(saldo.tiempo) * saldo.tarifa).toFixed(2);
        res.status(200).send({importe,placa});        
    } catch (error) {
        next(error);  
    }
}

exports.addTime = async ( req, res, next ) => {
    const { placa } = req.params;
    const { tiempo } = req.body;
    try {
        const updateSaldo = await Saldo.findOneAndUpdate({ placa },{$inc:{tiempo}});
        let type, tarifa;
        /** obtener type */
        type = await repository.getTypeByPlaca(placa);
        /** obtener tarifa */
        tarifa = await repository.getTarifaByType(type);
        if (!updateSaldo || type !== 'oficial') {
            const newSaldo = new Saldo({placa,tiempo,tarifa,type});
            res.status(201).send(newSaldo);
        }
        if (type === 'no resicencial' && tiempo > 0) {
            const importe = Number(parseInt(tiempo) * tarifa).toFixed(2); 
            res.status(200).send({placa,type,taifa,importe});
        }
        res.send({});
    } catch (error) {
        next(error);  
    }
}

exports.monthBegins = async ( req, res, next ) => {
    try {
        const placasOficiales = await Saldo.find({ type: "oficial" });
        /** delete estancias oficiales */
        await repository.deleteOficialEstancia(placasOficiales);
        /** delete saldos oficiales */
        await Saldo.deleteMany({ pacla: { $in: lacasOficiales }});
        /** reseteo tiempos a los residenciales */
        await Saldo.updateMany({ type: "residencial"}, { $set: { tiempo: 0 }});

        res.status(200).send({meesage: "comienzo de mes"});
    } catch (error) {
        next(error)
    }
}

exports.residentialPayment = async ( req, res, next ) => {
    const { filename } = req.body;
    try {
        let saldos = await Saldo.find({type: 'residencial'})
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

        const stat = fs.statSync(uri);
        res.writeHead(200, {
            'Content-Type': 'application/text',
            'Content-Length': stat.size,
            'Content-Disposition': 'attachment; filename=' + fileName + '.txt'
        });

        let readStream = fs.createReadStream(uri);
        readStream.pipe(res);

    } catch (error) {
        next(error);  
    }
}