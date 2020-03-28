const axios = require('axios');

const getCityWeather = async(city) => {

    const encodedCity = encodeURI(city);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedCity}`,
        headers: {'X-RapidAPI-Key': 'b25a4136e1msh2b61b359b3e5ba1p1789d4jsnd3a92a5bfc89'}
    });
    
   const resp = await instance.get();
   const data = resp.data.Results[0];


   if( data === 0 ){
       throw new Error(`There's no results for ${encodedCity}`);
   }
    
    return {
        city: data.name,
        lat: data.lat,
        lon: data.lon
    }
}



module.exports = {
    getCityWeather
}


