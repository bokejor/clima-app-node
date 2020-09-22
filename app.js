const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({

    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

// lugar.getLugarLatLon(argv.direccion)
//     .then(console.log)
//     .catch(console.log);

// clima.getClimaLatLon(36.720476, -4.412525)
//     .then(console.log)
//     .catch(console.log)

const getInfo = async(direccion) => {

    try {

        const respLugar = await lugar.getLugarLatLon(direccion);
        const respClima = await clima.getClimaLatLon(respLugar.lat, respLugar.lon);
        return `La temperatura de ${direccion} es de ${respClima.temperatura}`;

    } catch (e) {

        return `No se pudo determinar el clima de ${direccion}`;

    }


}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);