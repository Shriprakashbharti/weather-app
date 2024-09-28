import axios from 'axios';

const API_KEY='38ae5b2c390ff6a17a00d4cdacee6e63';
const API_URL=' http://api.openweathermap.org/data/2.5/weather';

export const getWeather=async(City,Country)=>{
    try {
      let response= await axios.get(`${API_URL}?q=${City},${Country}&appid=${API_KEY}&units=metric`);
      return response.data;
    } catch (error) {
        console.log('Error while calling the api',error.message);
        return error.response;
    }
}