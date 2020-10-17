const repository = require('./../repository');
const Saldo = require('./../models/Saldo');
const fs = require('fs');
const path = require('path');

exports.getAll = async ( req, res, next ) => {
    try {
        const saldos = await Saldo.find({});
        res.status(200).send(saldos);        
    } catch (error) {
        next(error);  
    }
}

exports.deleteAll = async ( req, res, next ) => {
    try {
        const saldos = await Saldo.deleteMany({});
        res.status(200).send(saldos);        
    } catch (error) {
        next(error);  
    }
}

exports.addTime = async ( req, res, next ) => {
    const { placa } = req.params;
    let { tiempo } = req.body;
    tiempo = tiempo || 0;
    try {
        const updateSaldo = await Saldo.findOneAndUpdate({ placa },{$inc:{tiempo}},{new:true});
        
        let type, tarifa;
        /** obtener type */
        type = await repository.getTypeByPlaca(placa);
        
        if (!type ) throw new Error('placa no encontrada');
        /** obtener tarifa */
        tarifa = await repository.getTarifaByType(type);

        let result={},status = 200;
        if (!updateSaldo && type !== 'oficial') {
            const newSaldo = new Saldo({placa,tiempo,tarifa,type});
            const save = await newSaldo.save();
            result = newSaldo;
            status = 201;
        }
        if (type === 'no residencial' && tiempo > 0) {
            const importe = Number(parseInt(tiempo) * tarifa).toFixed(2);
            result = {placa,type,tarifa,tiempo,importe};    
        }
        res.status(status).send(result);
    } catch (error) {
        next(error);  
    }
}

exports.monthBegins = async ( req, res, next ) => {
    try {
        const placasOficiales = await Saldo.find({ type: "oficial" });
        /** delete estancias oficiales */
        console.log(placasOficiales);
        if (Array.isArray(placasOficiales) && placasOficiales.length) {
            
            await repository.deleteOficialEstancia(placasOficiales);
            /** delete saldos oficiales */
            await Saldo.deleteMany({ placa: { $in: placasOficiales }});
        }
        /** reseteo tiempos a los residenciales */
        await Saldo.updateMany({ type: "residencial"}, { $set: { tiempo: 0 }});

        res.status(200).send({meesage: "comienzo de mes"});
    } catch (error) {
        next(error)
    }
}

exports.residentialPayment = async ( req, res, next ) => {
    const { filename } = req.params;
    try {
        let saldos = await Saldo.find({type: 'residencial'})
        
        saldos.map( saldo =>{
            saldo.importe = Number(parseInt(saldo.tiempo) * saldo.tarifa).toFixed(2);
        });
        
        const uri = path.join(__dirname,'./../paymentsFiles',filename+'.txt');
        const titles = 'Núm. placa           Tiempo estacionado (min.)            Cantidad a pagar\n';
        console.log(uri);
        fs.appendFile(uri,titles,{ encoding: 'utf8' }, (err) =>{ if( err ) console.log(err) });    
        for (let i = 0; i < saldos.length; i++) {
            const {placa, tiempo, importe} = saldos[i];
            const text= `${placa}                         ${tiempo}                     ${importe}\n`;
            fs.appendFile(uri,text,{ encoding: 'utf8' }, (err) =>{ if( err ) throw err });
        }

        const stat = fs.statSync(uri);
        res.writeHead(200, {
            'Content-Type': 'application/text',
            'Content-Length': stat.size,
            'Content-Disposition': 'attachment; filename=' + filename + '.txt'
        });

        let readStream = fs.createReadStream(uri);
        readStream.pipe(res);
    } catch (error) {
        next(error);  
    }
}