const axios = require('axios');

const getLugarLatLon = async(dir) => {

    const encodeUri = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeUri}.json`,
        params: { 'access_token': 'pk.eyJ1IjoiYm9rZWpvciIsImEiOiJja2Y4ZnlscXgwM3FpMnBsZHV0eWF0ZDRpIn0.Vv-nCPA-cR_8d87vI9zFYQ' }
    });

    const resp = await instance.get();

    if (resp.data.features.length === 0) {
        throw new Error(`No hay resultados para ${ dir }`);
    }

    const data = resp.data.features[0];
    const direccion = data.place_name;
    const lat = data.center[1];
    const lon = data.center[0];




    return {
        direccion,
        lat,
        lon
    }

}

module.exports = {

    getLugarLatLon

}