const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {

    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`La base introducida <<${base}>> no es un numero`);
            return;
        }
        if (!Number(limite)) {
            reject(`El limite introducido <<${base}>> no es un numero`);
            return;
        }

        console.log('============================='.green);
        console.log(`=======tabla de ${base}======`.yellow);
        console.log('============================='.green);
        let data = '';
        let message = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }
        message += `Listado de tabla del ${base} con limite ${limite}\n\n`;
        message += data;
        resolve(message);
    });
}

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {


        if (!Number(base)) {
            reject(`El valor introducido <<${base}>> no es un numero`);
            return;
        }

        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) reject(err);
            else
                resolve(`tabla-${base}-al-${limite}.txt`);
        });

    });
}



module.exports = { crearArchivo, listarTabla }