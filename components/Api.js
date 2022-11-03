import axios from 'axios';

const api = axios.create({
    baseURL:'https://api.hgbrasil.com/weather?array_limit=2&fields=only_results,temp,city_name,date,time,forecast,max,min,description&key=e4c586c4bd&city_name=Peruibe,SP'
});

export default api;