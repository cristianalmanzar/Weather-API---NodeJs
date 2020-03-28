const place = require('./City/city');
const argv = require('yargs').option({
    direction: {
        alias: 'c',
        description: 'City Address to get the current weather',
        demand: true
    }
}).argv

place.getCityWeather(argv.direction)
     .then( resp => {
         console.log(resp)
     });





