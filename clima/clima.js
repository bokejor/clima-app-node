const axios = require('axios');

const getClimaLatLon = async(lat, lon) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lat}&appid=c9f878bf09adf95c7e899215e29e5140&units=metric&lang=spanish`);

    if (resp.data === 0) {
        throw new Error(`No hay resultados`);
    }

    const temperatura = resp.data.main.temp;

    return {
        temperatura,

    }

}

module.exports = {
    getClimaLatLon
}