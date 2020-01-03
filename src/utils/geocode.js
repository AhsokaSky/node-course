const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ address +'.json?access_token=pk.eyJ1IjoiYWhzb2thc2t5IiwiYSI6ImNrNGFleGI3eDAxd3kzanUxOTViajlxdTUifQ.UWRq539hfy2yXDGJtdB_5Q'
    
    

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        
        } else {
            callback(undefined, {
                latitude: response.body.features[1].center[0],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode