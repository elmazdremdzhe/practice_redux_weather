import axios from 'axios';

const API_KEY='00ad5ec547e5b5033acc8aa8475aa874';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    connsole.log('Request', request);

    return{
        type: FETCH_WEATHER,
        payload: request
    };
}